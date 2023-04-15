package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.Skill;

import java.util.List;

public interface SkillService {

    public Skill save(Skill skill);
    public List<Skill> getSkill();
}
