package com.example.Bench.Management.Project.Service.Impl;

import com.example.Bench.Management.Project.Model.Location;
import com.example.Bench.Management.Project.Repository.LocationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class LocationService implements com.example.Bench.Management.Project.Service.LocationService {

    @Autowired
    private LocationRepo locationRepo;
    @Override
    public Location save(Location location) {
        return locationRepo.save(location);
    }

    @Override
    public List<Location> getData() {
        return locationRepo.findAll();
    }

    @Override
    public List<Location> getLocationDetails(Long id) {
        if(null!=id){
            return locationRepo.findAllById(Collections.singleton(id));
        }
        else{
            return locationRepo.findAll();
        }
    }

    @Override
    public void deleteLocation(Long id) {
         locationRepo.deleteById(id);
    }
}
