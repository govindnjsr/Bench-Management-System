package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Model.Dto;
import com.example.Bench.Management.Project.Model.RequestDto;
import com.example.Bench.Management.Project.Service.EmpDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/dto")
public class DtoController {

    @Autowired
    private EmpDetailsService empDetailsService;

    @GetMapping("/get")
    public List<Dto>getAllDto(){
        return empDetailsService.getAllDto();
    }

    @PostMapping("/get/filterd")
    public List<Dto>getallfilterd(@RequestBody RequestDto requestDto){

        return empDetailsService.getAllFilteredDto(requestDto);

    }
}
