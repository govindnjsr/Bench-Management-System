package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.Location;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface LocationService {

    public Location save(Location location);
    public List<Location>getData();

    public List<Location>getLocationDetails(Long id);
    public void deleteLocation(Long id);

    //adding employes to a particular location
    public void addEmployeeToLocation(Long locationid,EmpDetails empDetails);

    long getIdByLocation(String locName);
}
