package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor

public class Login {
    @Id
    @SequenceGenerator(
            name = "login_seq",
            sequenceName = "login_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "login_seq"
    )
    private long id;
    private String emailId;
    private long role;

}