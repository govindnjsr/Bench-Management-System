package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IntDetails {

    @Id
    @GeneratedValue
    public long SrNo;
    public String Result;
    public String Client;
    public Date Date;


//    @ManyToOne(
//            cascade = CascadeType.ALL
//    )
//    @JoinColumn(
//            name="teacher_id",
//            referencedColumnName = "teacherId"
//
//    )
//    private Teacher teacher;

}
