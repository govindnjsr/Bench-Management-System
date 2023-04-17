package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IntDetails {

    @Id
    @SequenceGenerator(
            name = "intdetails_seq",
            sequenceName = "intdetails_seq",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "intdetails_seq"
    )
    private long srNo;
    private String result;
    private String client;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private String date;

}
