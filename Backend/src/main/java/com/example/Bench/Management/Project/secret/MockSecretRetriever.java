package com.example.Bench.Management.Project.secret;

import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;
import static org.springframework.security.crypto.keygen.KeyGenerators.secureRandom;
public class MockSecretRetriever implements SecretRetriever{

    @Value("${apiKey}")
    private String accessKey;
    @Override
    public List<ClientKey> getClientKeys() {
        ClientKey clientKey = new ClientKey();
        clientKey.setClientName("demoClient");
//        String generatedString = RandomStringUtils.randomAlphanumeric(30).toLowerCase();
        String generatedString = accessKey;
        clientKey.setApikey(generatedString);  // set the api key here
        return List.of(clientKey);
    }
}
