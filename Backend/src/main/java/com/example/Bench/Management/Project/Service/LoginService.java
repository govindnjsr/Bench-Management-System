package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.Login;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface LoginService {

    //save the login details
    public Login save(Login login);
    //get the data
    public List<Login>getData();
    //get the id of user
    public long getId(String email);

    public void deleteLoginById(long id);

}
