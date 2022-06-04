package edu.com.ifce.equipespring.graficaapi.rest.order;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import edu.com.ifce.equipespring.graficaapi.model.Order;

public class OrderFormRequest {
	
	private Long id;
	private String description;
	private String name;
	private String dateDeliver;
	private BigDecimal price;
	private String type;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dateOrder;

	public OrderFormRequest() {
		super();
	}

	public OrderFormRequest(Long id, String description, String name, LocalDate dateOrder, String dateDeliver,
			BigDecimal price, String type) {
		super();
		this.id = id;
		this.description = description;
		this.name = name;
		this.dateOrder = dateOrder;
		this.dateDeliver = dateDeliver;
		this.price = price;
		this.type = type;
	}
	
	public Order toModel() {
		return new Order(id, description, name, dateDeliver, price, type);
	}
	
	public static OrderFormRequest fromModel(Order order) {
		return new OrderFormRequest(
				order.getId(),
				order.getDescription(),
				order.getName(),
				order.getDateOrder(),
				order.getDateDeliver(),
				order.getPrice(),
				order.getType()
				);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDateOrder() {
		return dateOrder;
	}

	public void setDateOrder(LocalDate dateOrder) {
		this.dateOrder = dateOrder;
	}

	public String getDateDeliver() {
		return dateDeliver;
	}

	public void setDateDeliver(String dateDeliver) {
		this.dateDeliver = dateDeliver;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
	
	
}
