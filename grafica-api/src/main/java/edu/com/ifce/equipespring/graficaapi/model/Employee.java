package edu.com.ifce.equipespring.graficaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "username", length = 100)
	private String user;
	
	@Column(length = 100)
	private String password;

	@Column(length = 255)
	private String name;

	public Employee() {
		super();
	}

	public Employee(String user, String password, String name) {
		super();
		this.user = user;
		this.password = password;
		this.name = name;
	}

	public Employee(Long id, String user, String password, String name) {
		super();
		this.id = id;
		this.user = user;
		this.password = password;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", user=" + user + ", password=" + password + ", name=" + name + "]";
	}

	
	
}
