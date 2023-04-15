package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepo extends JpaRepository<Skill,Long> {
}
