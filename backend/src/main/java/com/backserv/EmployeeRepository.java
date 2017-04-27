package com.backserv;

import org.springframework.data.repository.CrudRepository;

import com.backserv.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}