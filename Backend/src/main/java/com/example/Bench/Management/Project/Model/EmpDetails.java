package com.example.Bench.Management.Project.Model;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;

import java.sql.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EmpDetails {

    @Id
    @SequenceGenerator(
            name = "empdetails_seq",
            sequenceName = "empdetails_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "empdetails_seq"
    )
     private long id;
    private String name;
    private String address;
    private long phoneNo;
    private long workExp;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String benchDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String billableDate;
    private boolean benchStatus;
    private boolean active;
    private String empLocation;

    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name="EmpIntvId",
            referencedColumnName = "id"
    )
    private List<IntDetails> InterviewDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="skills_id",referencedColumnName = "id")
    private Skill skill;

    public boolean getActive() {
        return active;
    }

    public boolean getBenchStatus() {
        return benchStatus;
    }
}
