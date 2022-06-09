package edu.com.ifce.equipespring.graficaapi.rest.employee;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody EmployeeFormRequest employee) {
		Optional<Employee> employeeExistente = repository.findById(id);
		
		if(employeeExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Employee entityEmployee = employee.toModel();
		entityEmployee.setId(id);
		repository.save(entityEmployee);
		
		return ResponseEntity.ok().build();
		
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		Optional<Employee> employeeExistente = repository.findById(id);
		
		if(employeeExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		repository.delete(employeeExistente.get());
		return ResponseEntity.noContent().build();
		
	}
}
