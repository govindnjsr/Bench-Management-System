package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.Location;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface LocationService {

    public Location save(Location location);
    public List<Location>getData();

    public List<Location>getLocationDetails(Long id);
    public void deleteLocation(Long id);
}
