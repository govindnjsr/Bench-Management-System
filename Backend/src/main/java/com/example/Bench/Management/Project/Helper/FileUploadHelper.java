package com.example.Bench.Management.Project.Helper;

import lombok.Setter;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
@Setter
@Component
public class FileUploadHelper {
    public final String UPLOAD_DIR="C:/Users/shambhavi.vats/Desktop/Project/Bench-Management-System-1/Backend/src/main/resources/static/image";
    public String uploadFile(MultipartFile multipartFile, Long employeeId){
        //eitherwecanuseInputStream/ouputStreamorNIO package
        //NIOpackagehas .copy() method that takes 3 parameters 1.input stream(source) 2. path where you want to store 3.Replace option
        String f="";
        try {
            Files.copy(multipartFile.getInputStream(), Paths.get(UPLOAD_DIR + File.separator + (employeeId+multipartFile.getOriginalFilename())), StandardCopyOption.REPLACE_EXISTING);
            f=UPLOAD_DIR+"/"+employeeId+multipartFile.getOriginalFilename();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    return f;
    }

}
