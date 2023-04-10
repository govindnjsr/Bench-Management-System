package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.Login;
import com.example.Bench.Management.Project.Repository.LoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoginService implements com.example.Bench.Management.Project.Service.LoginService {

    @Autowired
    private LoginRepo loginRepo;
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


}
