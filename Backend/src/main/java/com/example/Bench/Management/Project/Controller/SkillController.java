package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.Skill;
import com.example.Bench.Management.Project.Service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/skill")
public class SkillController {

    @Autowired
    public SkillService skillService;

    @PostMapping
    public ResponseEntity<Skill>save(@RequestBody  Skill skill){
        return new ResponseEntity<Skill>(skillService.save(skill), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Skill>getData(){
        return skillService.getSkill();
    }
}
