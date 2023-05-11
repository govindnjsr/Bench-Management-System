package com.example.Bench.Management.Project.Controller;

import com.example.Bench.Management.Project.Helper.FileUploadHelper;
import com.example.Bench.Management.Project.Model.EmpDetails;
import com.example.Bench.Management.Project.Model.IntDetails;
import com.example.Bench.Management.Project.Service.EmpDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/empdetails")
public class EController {

    @Autowired
    private EmpDetailsService empDetailsService;

    @Autowired
    private FileUploadHelper fileUploadHelper;

    public EController(EmpDetailsService empDetailsService){
        super();
        this.empDetailsService=empDetailsService;
    }

    @PostMapping("/save")
    public ResponseEntity<EmpDetails>save(@RequestBody EmpDetails empDetails){
        return new ResponseEntity<EmpDetails>(empDetailsService.save(empDetails), HttpStatus.CREATED);
    }

    @GetMapping("/get")
    public List<EmpDetails>getData(){
        return empDetailsService.getData();
    }


    //get count of each location
    @GetMapping("/get/countOfEachLocation")
    public List<Map<Long,Long>>getCountOfEachLocation(){return empDetailsService.getCountOfEachLocation();}
    @GetMapping("/get/gurugramBU")
    public List<Integer> getAllGurugramBU(){return empDetailsService.getAllGurugramBU();}

    @GetMapping("/get/bangaloreBU")
    public List<Integer> getAllBangaloreBU(){return empDetailsService.getAllBangaloreBU();}

    @GetMapping("/get/hyderabadBU")
    public List<Integer> getAllHyderabadBU(){return empDetailsService.getAllHyderabadBU();}

    @GetMapping("/get/{employeeId}")
    public EmpDetails getEmployeeById(@PathVariable Long employeeId){
        return empDetailsService.getEmployeeById(employeeId);
    }

    @PutMapping("/upload-file/{employeeId}")
    public ResponseEntity<String> uploadFile(@PathVariable Long employeeId,@RequestBody MultipartFile file)
    {
        try {
            //validations

            if (file==null || file.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Request Must contain File");
            }

            if (!file.getContentType().equals("application/pdf")) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Only PDF files allowed");
            }

            //file upload..you should know the path where you want to store, path can be anywhere in the server
            String f=fileUploadHelper.uploadFile(file,employeeId);
            System.out.println(f);
            if(!f.isEmpty()){

                empDetailsService.saveResume(f,employeeId);
                return ResponseEntity.ok(f);
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
    }

    @GetMapping("/download/{employeeId}")
    public ResponseEntity<Resource> getFile(@PathVariable Long employeeId) {
        EmpDetails empDetails1 = empDetailsService.getEmployeeById(employeeId);
        String filepath= empDetails1.getResume();
        try{
            File file=new File(filepath);
            Path path=Paths.get(file.getAbsolutePath());
            Resource resource=new UrlResource(path.toUri());
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(Files.probeContentType(path)))
                    .header(HttpHeaders.CONTENT_DISPOSITION,"attachment; filename=/"+resource.getFilename())
                    .body(resource);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/ongoing/{employeeId}/{srNo}")
    public String updateOnGoing(@PathVariable Long employeeId, @PathVariable Long srNo){
        return empDetailsService.updateOnGoing(employeeId,srNo);
    }

    @PutMapping("/blockedstatus/{employeeId}")
    public String updateBlockedById(@PathVariable Long employeeId){
        return empDetailsService.updateBlockedById(employeeId);
    }
    @PutMapping("/updateoncondition/{employeeId}")
    public String updateOnCondition(@PathVariable Long employeeId, @RequestBody IntDetails intDetails){
        return empDetailsService.updateOnCondition(employeeId,intDetails);
    }

    @GetMapping("/get/BU")
    public List<String> getBU(){return empDetailsService.getBU();}

    @GetMapping("/get/Location")
    public List<String> getLocation(){return empDetailsService.getLocation();}
    @PutMapping("/update/{employeeId}")
    public String updateBenchById(@PathVariable Long employeeId){
            return empDetailsService.updateBenchById(employeeId);
    }

}
