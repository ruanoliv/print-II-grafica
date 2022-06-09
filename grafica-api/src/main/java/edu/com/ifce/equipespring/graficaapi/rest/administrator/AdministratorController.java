package edu.com.ifce.equipespring.graficaapi.rest.administrator;

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

import edu.com.ifce.equipespring.graficaapi.model.Administrator;
import edu.com.ifce.equipespring.graficaapi.model.repository.AdministratorRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
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
	
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody AdministratorFormRequest administrator) {
		Optional<Administrator> administratorExistente = repository.findById(id);
		
		if(administratorExistente .isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Administrator entityAdministrator = administrator.toModel();
		entityAdministrator.setId(id);
		repository.save(entityAdministrator);
		
		return ResponseEntity.ok().build();
		
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		Optional<Administrator> administratorExistente = repository.findById(id);
		
		if(administratorExistente .isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		repository.delete(administratorExistente.get());
		return ResponseEntity.noContent().build();
		
	}
}
