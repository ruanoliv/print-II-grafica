package edu.com.ifce.equipespring.graficaapi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "administrator")
public class Administrator {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "\"user\"", length = 100)
	private String user;
	
	@Column(length = 100)
	private String password;

	public Administrator() {
		super();
	}

	public Administrator(String user, String password) {
		super();
		this.user = user;
		this.password = password;
	}

	public Administrator(Long id, String user, String password) {
		super();
		this.id = id;
		this.user = user;
		this.password = password;
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

	@Override
	public String toString() {
		return "Employee [id=" + id + ", user=" + user + ", password=" + password + "]";
	}

	
	
}
