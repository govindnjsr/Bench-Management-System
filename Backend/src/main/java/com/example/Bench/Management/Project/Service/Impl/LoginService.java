package com.example.Bench.Management.Project.Service.Impl;
import com.example.Bench.Management.Project.Security.*;
import com.example.Bench.Management.Project.secret.ClientKey;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.example.Bench.Management.Project.Model.Login;
import com.example.Bench.Management.Project.Repository.LoginRepo;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;
@Service
public class LoginService implements com.example.Bench.Management.Project.Service.LoginService {

    @Autowired
    private LoginRepo loginRepo;

    @Autowired
    private SecurityConfig securityConfig;
    @Override
    public Login save(Login login) {
        return loginRepo.save(login);
    }

    @Override
    public List<Login> getData() {
        return loginRepo.findAll();
    }

    @Override
    public long getId(String email) {
        return loginRepo.getId(email);
    }

    @Override
    public void deleteLoginById(long id) {
        loginRepo.deleteById(id);
    }

    @Value("${google_client_id}")
    private String google_client_id;

    @Value(("${apiKey}"))
    private String accessKey;
    public String verify(String token) {
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(new NetHttpTransport(), new GsonFactory())
                // Specify the CLIENT_ID of the app that accesses the backend:
                .setAudience(Collections.singletonList(google_client_id))
                // Or, if multiple clients access the backend:
                //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
                .build();
        try{
            GoogleIdToken idToken = verifier.verify(token);
            if(idToken!=null){
                Payload payload = idToken.getPayload();
                String email = payload.getEmail();
                List<Login> emails = loginRepo.findAll();
                for(int i=0; i<emails.size(); i++){
                    if(emails.get(i).getEmail().equals(email)) {
                        String mfa = emails.get(i).getSecretKey() != null? "1" : "0";
                        if(emails.get(i).getRole() == 1) return "admin + ApiKey "+ accessKey + " " + mfa;
                        else return Long.toString(emails.get(i).getEmpId()) + " + ApiKey "+ accessKey + " " + mfa;
                    }
                }
            }
        }
        catch (GeneralSecurityException e) {
            return "not verified";
        }
        catch (IOException e) {
            return "not verified";
        }
        return "not verified";
    }

    @Override
    public void saveSecret(String email, String secretKey) {
        loginRepo.setSecretByEmail(secretKey, email);
    }

    public String getSecretKeyByEmail(String email) {
        return loginRepo.getSecretByEmail(email);
    }
}
