package edu.com.ifce.equipespring.graficaapi.rest.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@JsonIgnoreProperties
	@PostMapping
	public CustomerFormRequest salvar(@RequestBody CustomerFormRequest customer) {
		Customer entityCostumer = customer.toModel();
		Address entityAddress = entityCostumer.getAddress();
		entityAddress.setCustomer(entityCostumer);
		addressRepository.save(entityAddress);
		customerRepository.save(entityCostumer);
		return CustomerFormRequest.fromModel(entityCostumer);
	}
}