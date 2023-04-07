package com.example.Bench.Management.Project.Model;

import lombok.*;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmpDetails {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
     public long id;
     public String Name;
     public String Address;
     public long PhoneNo;
     public String WorkExp;
     public Date BenchDate;
     public Date BillableDate;
     public String Location;
     public Boolean BenchStatus;
     public String Skills;

      @OneToMany(
              cascade = CascadeType.ALL
      )
  @JoinColumn(
          name="EmpIntvId",
          referencedColumnName = "id"
  )
  private List<IntDetails> InterviewDetails;

  @OneToMany(
          cascade = CascadeType.ALL
  )
  @JoinColumn(
          name="EmpProjId",
          referencedColumnName = "id"
  )
  private List<ProjDetails> projectDetails;


}
