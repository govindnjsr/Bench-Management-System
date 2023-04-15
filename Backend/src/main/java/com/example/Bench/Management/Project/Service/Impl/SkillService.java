package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.Skill;
import com.example.Bench.Management.Project.Repository.SkillRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService implements com.example.Bench.Management.Project.Service.SkillService {

   @Autowired
   public SkillRepo skillRepo;
    @Override
    public Skill save(Skill skill) {
        return skillRepo.save(skill);
    }

    @Override
    public List<Skill> getSkill() {
        return skillRepo.findAll();
    }
}
