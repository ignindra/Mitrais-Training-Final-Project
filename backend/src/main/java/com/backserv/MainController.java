package com.backserv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.backserv.Employee;
import com.backserv.EmployeeRepository;
import com.backserv.Grade;
import com.backserv.GradeRepository;
import com.backserv.Division;
import com.backserv.DivisionRepository;
import com.backserv.Location;
import com.backserv.LocationRepository;

@Controller
@RequestMapping(path="/emapp")
public class MainController {
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private GradeRepository gradeRepository;
	@Autowired
	private DivisionRepository divisionRepository;
	@Autowired
	private LocationRepository locationRepository;

	@PostMapping(path="/add/employee")
	public @ResponseBody String addNewEmployee (@RequestBody Employee emp) {
		employeeRepository.save(emp);
		return "Saved";
	}

	@GetMapping(path="/all/employee")
	public @ResponseBody Iterable<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@DeleteMapping(path="/del/employee/{id}")
	public @ResponseBody String deleteEmployee(@PathVariable String id) {
		employeeRepository.delete(Integer.parseInt(id));
		return "Deleted";
	}

	@PutMapping(path="/update/employee")
	public @ResponseBody String updateEmployee(@RequestBody Employee emp) {
		Employee tempEmp = employeeRepository.findOne(emp.getId());
		tempEmp.setFirstname(emp.getFirstname());
		tempEmp.setLastname(emp.getLastname());
		tempEmp.setGender(emp.getGender());
		tempEmp.setBirthdate(emp.getBirthdate());
		tempEmp.setNationality(emp.getNationality());
		tempEmp.setMaritalstatus(emp.getMaritalstatus());
		tempEmp.setDivision(emp.getDivision());
		tempEmp.setSubdivision(emp.getSubdivision());
		tempEmp.setStatus(emp.getStatus());
		tempEmp.setSuspenddate(emp.getSuspenddate());
		tempEmp.setHireddate(emp.getHireddate());
		tempEmp.setGrade(emp.getGrade());
		tempEmp.setPhone(emp.getPhone());
		tempEmp.setEmail(emp.getEmail());
		tempEmp.setLocation(emp.getLocation());
		employeeRepository.save(tempEmp);
		return "Updated";
	}

	@GetMapping(path="/all/grade")
	public @ResponseBody Iterable<Grade> getAllGrades() {
		return gradeRepository.findAll();
	}

	@GetMapping(path="/all/division")
	public @ResponseBody Iterable<Division> getAllDivisions() {
		return divisionRepository.findAll();
	}

	@GetMapping(path="/all/location")
	public @ResponseBody Iterable<Location> getAllLocations() {
		return locationRepository.findAll();
	}
}