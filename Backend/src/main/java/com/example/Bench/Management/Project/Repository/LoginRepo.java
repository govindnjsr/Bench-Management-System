package com.example.Bench.Management.Project.Repository;

import com.example.Bench.Management.Project.Model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface LoginRepo extends JpaRepository<Login,Long> {

    @Query(value = "select id from bench.login where email=:email",nativeQuery = true)
     public Long getId(@Param("email") String email);
    @Modifying
    @Transactional
    @Query(value = "update Login l SET l.secretKey=:secretKey WHERE l.email=:email")
    public void setSecretByEmail(@Param("secretKey") String secretKey, @Param("email") String email);
    @Query(value = "select secretKey from Login where email=:email")
    public String getSecretByEmail(@Param("email") String email);
}
