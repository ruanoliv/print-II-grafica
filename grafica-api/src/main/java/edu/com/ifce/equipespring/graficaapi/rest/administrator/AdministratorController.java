package edu.com.ifce.equipespring.graficaapi.rest.administrator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import edu.com.ifce.equipespring.graficaapi.model.Administrator;
import edu.com.ifce.equipespring.graficaapi.model.repository.AdministratorRepository;


public class AdministratorController {
	
	@Autowired
	private AdministratorRepository repository;
	
	@PostMapping
	public AdministratorFormRequest salvar(@RequestBody AdministratorFormRequest administrator) {
		
		Administrator entityAdministrator = administrator.toModel();
		repository.save(entityAdministrator);
		System.out.println(entityAdministrator);
		return AdministratorFormRequest.fromModel(entityAdministrator);
		
	}
}
