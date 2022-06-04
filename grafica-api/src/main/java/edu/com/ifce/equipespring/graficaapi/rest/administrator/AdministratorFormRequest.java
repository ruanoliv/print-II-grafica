package edu.com.ifce.equipespring.graficaapi.rest.administrator;

import edu.com.ifce.equipespring.graficaapi.model.Administrator;

public class AdministratorFormRequest {
	private Long id;
	private String user;
	private String password;
	
	public AdministratorFormRequest() {
		super();
	}

	public AdministratorFormRequest(Long id, String user, String password) {
		super();
		this.id = id;
		this.user = user;
		this.password = password;
	}
	
	public Administrator toModel() {
		return new Administrator(user, password);
	}
	
	public static AdministratorFormRequest fromModel(Administrator administrator) {
		return new AdministratorFormRequest(
				administrator.getId(),
				administrator.getUser(),
				administrator.getPassword()
				);
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

}
