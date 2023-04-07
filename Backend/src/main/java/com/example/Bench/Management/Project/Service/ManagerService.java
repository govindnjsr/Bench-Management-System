package com.example.Bench.Management.Project.Service;

import com.example.Bench.Management.Project.Model.ManagerDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ManagerService {

    ManagerDetails saveManager(ManagerDetails managerDetails);

    List<ManagerDetails>getAllManagers();
}
