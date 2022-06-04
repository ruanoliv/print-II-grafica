package edu.com.ifce.equipespring.graficaapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.com.ifce.equipespring.graficaapi.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
