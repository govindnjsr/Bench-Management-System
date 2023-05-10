package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepo extends JpaRepository<Skill,Long> {

    @Query(value = "SELECT distinct skill FROM ( SELECT 'angular' AS skill FROM skill WHERE angular = true UNION ALL\n" +
            "       SELECT 'css' FROM skill WHERE css = true UNION ALL \n" +
            "       SELECT 'html' FROM skill WHERE html = true UNION ALL\n" +
            "       SELECT 'java' FROM skill WHERE java = true UNION ALL\n" +
            "       SELECT 'javascript' FROM skill WHERE javascript = true UNION ALL\n" +
            "\t   SELECT 'python' FROM skill WHERE python = true UNION ALL\n" +
            "       SELECT 'react' FROM skill WHERE react = true UNION ALL\n" +
            "       SELECT 'springboot' FROM skill WHERE springboot = true) AS all_skills",nativeQuery = true)
    public List<String> getAllSkill();
}
