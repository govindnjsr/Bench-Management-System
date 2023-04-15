package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id;
    private boolean java;
    private boolean python;
    private boolean react;
    private boolean angular;
    private boolean html;
    private boolean css;
    private boolean javascript;
    private boolean springboot;


    public boolean getJava() {
        return java;
    }

    public boolean getPython() {
        return python;
    }

    public boolean getReact() {
        return react;
    }

    public boolean getAngular() {
        return angular;
    }

    public boolean getHtml() {
        return html;
    }

    public boolean getCss() {
        return css;
    }

    public boolean getJavascript() {
        return javascript;
    }

    public boolean getSpringboot() {
        return springboot;
    }
}
