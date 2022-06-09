package edu.com.ifce.equipespring.graficaapi.rest.order;

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

import edu.com.ifce.equipespring.graficaapi.model.Order;
import edu.com.ifce.equipespring.graficaapi.model.repository.OrderRepository;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {
	
	@Autowired
	private OrderRepository repository;
	
	@GetMapping
	public List<OrderFormRequest> getLista(){
		return repository.findAll().stream()
						.map( OrderFormRequest::fromModel )
						.collect(Collectors.toList());
	}
	
	public ResponseEntity<OrderFormRequest> getById(@PathVariable Long id){
		Optional<Order> orderExistente = repository.findById(id);
		
		if(orderExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		var order = orderExistente.map( OrderFormRequest::fromModel ).get();
		return ResponseEntity.ok(order);
	}
	
	@PostMapping
	public OrderFormRequest salvar(@RequestBody OrderFormRequest order) {
		
		Order entityOrder = order.toModel();
		repository.save(entityOrder);
		System.out.println(entityOrder);
		return OrderFormRequest.fromModel(entityOrder);
		
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody OrderFormRequest order) {
		Optional<Order> orderExistente = repository.findById(id);
		
		if(orderExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Order entityOrder = order.toModel();
		entityOrder.setId(id);
		repository.save(entityOrder);
		
		return ResponseEntity.ok().build();
		
	}
	@DeleteMapping("{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		Optional<Order> orderExistente = repository.findById(id);
		
		if(orderExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		repository.delete(orderExistente.get());
		return ResponseEntity.noContent().build();
		
	}
}
