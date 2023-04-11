package com.example.Bench.Management.Project.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Location {
    @Id
    private long id;
    private String locName;

    @OneToMany(
            cascade = CascadeType.ALL
    )
    @JoinColumn(
            name="EmpLocId",
            referencedColumnName = "id"
    )
    private List<EmpDetails> EmployeeDetails;
    @ManyToMany(mappedBy = "assignedLocation", fetch = FetchType.LAZY,
         cascade = {
            CascadeType.PERSIST,
                 CascadeType.MERGE
         })
    @JsonIgnore
    private List<ManagerDetails> Managerset=new ArrayList<>();


}
