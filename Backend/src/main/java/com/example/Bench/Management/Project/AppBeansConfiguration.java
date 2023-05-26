package com.example.Bench.Management.Project;

import com.example.Bench.Management.Project.secret.MockSecretRetriever;
import com.example.Bench.Management.Project.secret.SecretRetriever;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppBeansConfiguration {
    @Bean
    public ObjectMapper getObjectMapper(){
        return new ObjectMapper();
    }

    @Bean
    @Qualifier(value = "mockSecretRetriever")
    public SecretRetriever getMockSecretRetriever(){
        return new MockSecretRetriever();
    }
}
