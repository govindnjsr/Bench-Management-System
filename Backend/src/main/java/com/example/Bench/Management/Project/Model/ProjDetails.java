package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProjDetails {

    @Id
    public long SrNo;
    public String ProjectName;
    public Date StartDate;
    public Date EndDate;

}
