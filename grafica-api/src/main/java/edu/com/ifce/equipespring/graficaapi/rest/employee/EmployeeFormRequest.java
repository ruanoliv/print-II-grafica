package edu.com.ifce.equipespring.graficaapi.rest.employee;

import edu.com.ifce.equipespring.graficaapi.model.Employee;

public class EmployeeFormRequest {

	private Long id;
	private String user;
	private String name;
	private String password;
	
	public EmployeeFormRequest() {
		super();
	}

	public EmployeeFormRequest(Long id, String user, String name, String password) {
		super();
		this.id = id;
		this.user = user;
		this.name = name;
		this.password = password;
	}
	
	public Employee toModel() {
		return new Employee(user, password, name);
	}
	
	public static EmployeeFormRequest fromModel(Employee employee) {
		return new EmployeeFormRequest(
				employee.getId(),
				employee.getUser(),
				employee.getName(),
				employee.getPassword()
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
