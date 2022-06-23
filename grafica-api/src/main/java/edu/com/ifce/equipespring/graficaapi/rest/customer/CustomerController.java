package edu.com.ifce.equipespring.graficaapi.rest.customer;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import edu.com.ifce.equipespring.graficaapi.model.Address;
import edu.com.ifce.equipespring.graficaapi.model.Customer;
import edu.com.ifce.equipespring.graficaapi.model.repository.AddressRepository;
import edu.com.ifce.equipespring.graficaapi.model.repository.CustomerRepository;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin("*")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@GetMapping
	public List<CustomerFormRequest> getLista(){
		return customerRepository.findAll().stream()
						.map(CustomerFormRequest::fromModel )
						.collect(Collectors.toList());
	}
	
	@JsonIgnoreProperties
	@PostMapping
	public CustomerFormRequest salvar(@RequestBody CustomerFormRequest customer) {
		Customer entityCostumer = customer.toModel();
		Address entityAddress = entityCostumer.getAddress();
		entityAddress.setCustomer(entityCostumer);
		customerRepository.save(entityCostumer);
		return CustomerFormRequest.fromModel(entityCostumer);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody CustomerFormRequest customer) {
		Optional<Customer> customerExistente = customerRepository.findById(id);
		
		if(customerExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Customer entityCustomer = customer.toModel();
		entityCustomer.setId(id);
		customerRepository.save(entityCustomer);
		
		return ResponseEntity.ok().build();
		
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		Optional<Customer> customerExistente = customerRepository.findById(id);
		
		if(customerExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		customerRepository.delete(customerExistente.get());
		return ResponseEntity.noContent().build();
		
	}
}