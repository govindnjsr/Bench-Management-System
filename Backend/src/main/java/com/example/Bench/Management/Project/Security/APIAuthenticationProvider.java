package com.example.Bench.Management.Project.Security;

import com.example.Bench.Management.Project.secret.ClientKey;
import com.example.Bench.Management.Project.secret.SecretRetriever;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class APIAuthenticationProvider implements AuthenticationProvider {
    private final List<ClientKey> keys;

    public APIAuthenticationProvider(SecretRetriever awsSecretRetriever){
        this.keys = awsSecretRetriever.getClientKeys();
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String authorization = (String) authentication.getCredentials();

        if(authorization != null && authorization.startsWith("ApiKey")){
            String[] key = authorization.split(" ");
            if(key.length == 2){
                Optional<ClientKey> clientKey = keys.stream().filter(value -> value.getApikey().equals(key[1])).findFirst();
                if(clientKey.isPresent()){
                    return new APITokenUser(clientKey.get().getClientName(), null, new ArrayList<>());
                }
            }
        }
        return authentication;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(APITokenUser.class);
    }
}
