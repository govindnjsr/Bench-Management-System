package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.Location;
import com.example.Bench.Management.Project.Service.Impl.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/location")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @PostMapping
    public ResponseEntity<Location>save(@RequestBody Location location){
        return new ResponseEntity<Location>(locationService.save(location), HttpStatus.CREATED);
    }
    @GetMapping
    public List<Location>getData(){
        return locationService.getData();
    }

    @GetMapping("{id}")
    public List<Location> getlocation(@PathVariable long id){
        return locationService.getLocationDetails(id);
    }

}
