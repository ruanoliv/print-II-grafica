package edu.com.ifce.equipespring.graficaapi.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name = "order")
public class Order {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	@Column(length = 255)
	private String description;
	
	@Column(length = 100)
	private String name;
	
	@Column(name = "date_order")
	private LocalDate dateOrder;
	
	@Column(name = "date_deliver")
	private String dateDeliver;
	
	@Column(precision = 16, scale = 2)
	private BigDecimal price;
	
	@Column(length = 100)
	private String type;
	
	
	
	public Order() {
		super();
	}
	
	public Order(String description, String name, String dateDeliver, BigDecimal price,
			String type) {
		super();
		this.description = description;
		this.name = name;
		this.dateDeliver = dateDeliver;
		this.price = price;
		this.type = type;
	}

	public Order(Long id, String description, String name, String dateDeliver, BigDecimal price,
			String type) {
		super();
		this.id = id;
		this.description = description;
		this.name = name;
		this.dateDeliver = dateDeliver;
		this.price = price;
		this.type = type;
	}
	
	@PrePersist
	public void prePersist() {
		setDateOrder(LocalDate.now());
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

	@Override
	public String toString() {
		return "Order [id=" + id + ", description=" + description + ", name=" + name + ", dateOrder=" + dateOrder
				+ ", dateDeliver=" + dateDeliver + ", price=" + price + ", type=" + type + "]";
	}
	
	
	
}
