package edu.com.ifce.equipespring.graficaapi.rest.customer;

import edu.com.ifce.equipespring.graficaapi.model.Address;
import edu.com.ifce.equipespring.graficaapi.model.Customer;

public class CustomerFormRequest {
	
	private Long id;
	private String name;
	private String phone;
	private char sex;
	private String cpf;
    private Address address;

	public CustomerFormRequest() {
		super();
	}
	
	/**
	 * @param id
	 * @param name
	 * @param phone
	 * @param sex
	 * @param cpf
	 * @param addresses
	 */
	public CustomerFormRequest(Long id, String name, String phone, char sex, String cpf, Address address) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.sex = sex;
		this.cpf = cpf;
		this.address = address;
	}
	
	public Customer toModel() {
		return new Customer(name, phone, sex, cpf, address);
	}
	
	public static CustomerFormRequest fromModel(Customer customer) {
		return new CustomerFormRequest(
				customer.getId(),
				customer.getName(),
				customer.getPhone(),
				customer.getSex(),
				customer.getCpf(),
				customer.getAddress()
				);
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return the sex
	 */
	public char getSex() {
		return sex;
	}

	/**
	 * @param sex the sex to set
	 */
	public void setSex(char sex) {
		this.sex = sex;
	}

	/**
	 * @return the cpf
	 */
	public String getCpf() {
		return cpf;
	}

	/**
	 * @param cpf the cpf to set
	 */
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	/**
	 * @return the addresses
	 */
	public Address getAddress() {
		return address;
	}

	/**
	 * @param addresses the addresses to set
	 */
	public void setAddress(Address address) {
		this.address = address;
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}	
	
	
}
