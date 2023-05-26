package com.example.Bench.Management.Project.Helper;

import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
@Setter
@Component
public class FileUploadHelper {

    // update the path in application properties
    @Value("${resumePath}")
    private String resumePath;
    public String uploadFile(MultipartFile multipartFile, Long employeeId){
        //eitherwecanuseInputStream/ouputStreamorNIO package
        //NIOpackagehas .copy() method that takes 3 parameters 1.input stream(source) 2. path where you want to store 3.Replace option
        String f="";
        try {
            Files.copy(multipartFile.getInputStream(), Paths.get(resumePath + File.separator + (employeeId+multipartFile.getOriginalFilename())), StandardCopyOption.REPLACE_EXISTING);
            f=resumePath+"/"+employeeId+multipartFile.getOriginalFilename();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    return f;
    }

}
