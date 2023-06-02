package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.Login;
import com.example.Bench.Management.Project.Service.Impl.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/login")
@CrossOrigin("http://localhost:3000/")
public class LoginController {
    @Autowired
    private LoginService loginService;
    @PostMapping("/save")
    public ResponseEntity<Login>save(@RequestBody Login login){
        return new ResponseEntity<Login>(loginService.save(login), HttpStatus.CREATED);
    }

    @PostMapping("/verify")
    public String verify(@RequestBody String token){
        return loginService.verify(token);
    }

    @GetMapping("/get")
    public List<Login>getData(){
        return loginService.getData();
    }

    @GetMapping("/{email}")
    public long getId(@PathVariable(required = false) String email){
        return loginService.getId(email);
    }

    @DeleteMapping("/{email}")
    public String deleteLoginById(@PathVariable(required = false) String email){
        long id=loginService.getId(email);
        loginService.deleteLoginById(id);
        return "Deleted";
    }

    @PostMapping("/saveSecret/{email}")
    public String saveSecret( @PathVariable(required = false) String email, @RequestBody String secretKey){
        loginService.saveSecret(email, secretKey);
        return "secret saved";
    }
    @GetMapping("/getSecretKey/{email}")
    public String getSecretKeyByEmail(@PathVariable(required = false) String email){
        return loginService.getSecretKeyByEmail(email);
    }
}
