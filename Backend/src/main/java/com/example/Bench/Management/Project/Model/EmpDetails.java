package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
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
    private String workExp;
    private Date benchDate;
    private Date billableDate;
    private Boolean benchStatus;
    private String skills;

    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name="EmpIntvId",
            referencedColumnName = "id"
    )
    private List<IntDetails> InterviewDetails;


}
