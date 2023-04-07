package com.example.Bench.Management.Project.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ManagerDetails {

    @Id
    @GeneratedValue
    public long Id;
    public String Name;
    public String Address;
    public long Phone;
    public long WorkExp;
    public String LocationD;
    public String LoginId;
    public String LoginPass;
    public String LocationFirst;
    public String LocationSecond;

}
