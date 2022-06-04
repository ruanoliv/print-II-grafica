package edu.com.ifce.equipespring.graficaapi.rest.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@PostMapping
	public OrderFormRequest salvar(@RequestBody OrderFormRequest order) {
		
		Order entityOrder = order.toModel();
		repository.save(entityOrder);
		System.out.println(entityOrder);
		return OrderFormRequest.fromModel(entityOrder);
		
	}
}
