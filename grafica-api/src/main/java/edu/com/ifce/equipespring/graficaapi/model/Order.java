package edu.com.ifce.equipespring.graficaapi.model;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "\"order\"")
public class Order {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	private Long administratorId;
	
	private Long customerId;
	
	@Column(length = 255)
	private String description;
	
	@Column(length = 100)
	private String name;
	
	@Column(name = "date_order")
	private LocalDate dateOrder;
	
	@Column(name = "date_deliver")
	private Date dateDeliver;
	
	@Column(precision = 16, scale = 2)
	private BigDecimal price;
	
	@Column(length = 100)
	private String type;
	
	public Order() {
		super();
	}
	
	public Order(Long administratorId, Long customerId, String description, String name, LocalDate dateOrder,
			Date dateDeliver, BigDecimal price, String type) {
		super();
		this.customerId = customerId;
		this.administratorId = administratorId;
		this.description = description;
		this.name = name;
		this.dateOrder = dateOrder;
		this.dateDeliver = dateDeliver;
		this.price = price;
		this.type = type;
	}

	public Order(Long id, Long customerId, Long administratorId, String description, String name,
			LocalDate dateOrder, Date dateDeliver, BigDecimal price, String type) {
		super();
		this.customerId = customerId;
		this.administratorId = administratorId;
		this.description = description;
		this.name = name;
		this.dateOrder = dateOrder;
		this.dateDeliver = dateDeliver;
		this.price = price;
		this.type = type;
	}

	@PrePersist
	public void prePersist() throws ParseException {
		/*
		 * 
		 * 
		 * SimpleDateFormat formatar = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy", Locale.US);
		Date newDate = formatar.parse(dateDeliver);  
		setDateDeliver(newDate);
		 */
		
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

	public Date getDateDeliver() {
		return dateDeliver;
	}

	public void setDateDeliver(Date dateDeliver) {
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
	
	

	/**
	 * @return the administratorId
	 */
	public Long getAdministratorId() {
		return administratorId;
	}

	/**
	 * @param administratorId the administratorId to set
	 */
	public void setAdministratorId(Long administratorId) {
		this.administratorId = administratorId;
	}

	/**
	 * @return the customerId
	 */
	public Long getCustomerId() {
		return customerId;
	}

	/**
	 * @param customerId the customerId to set
	 */
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", description=" + description + ", name=" + name + ", dateOrder=" + dateOrder
				+ ", dateDeliver=" + dateDeliver + ", price=" + price + ", type=" + type + "]";
	}
	
	
	
}
