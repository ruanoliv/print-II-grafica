package edu.com.ifce.equipespring.graficaapi.rest.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.com.ifce.equipespring.graficaapi.model.Employee;
import edu.com.ifce.equipespring.graficaapi.model.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employee")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;
	
	@PostMapping
	public EmployeeFormRequest salvar(@RequestBody EmployeeFormRequest employee) {
		
		Employee entityEmployee = employee.toModel();
		repository.save(entityEmployee);
		System.out.println(entityEmployee);
		return EmployeeFormRequest.fromModel(entityEmployee);
		
	}
}
