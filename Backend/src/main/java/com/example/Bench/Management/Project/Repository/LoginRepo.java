package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepo extends JpaRepository<Login,Long> {

    @Query(value = "select id from bench.login where email=:email",nativeQuery = true)
     public Long getId(@Param("email") String email);
}
