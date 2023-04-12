package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ManagerDetails {

    @Id
    @SequenceGenerator(
            name = "mngdetails_seq",
            sequenceName = "mngdetails_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "mngdetails_seq"
    )
    private long id;
    private String mName;
    private Boolean mActive;
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JoinTable(
            name = "locationmanagertable",
            joinColumns = {
                    @JoinColumn(name="locationxid",referencedColumnName = "id")
            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name="managerxid",
                            referencedColumnName = "id"
                    )
            }
    )

    private List<Location>assignedLocation=new ArrayList<>();

}
