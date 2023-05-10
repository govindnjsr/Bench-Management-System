package com.example.Bench.Management.Project.Model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
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

    private String mEmail;
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
