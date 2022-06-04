package edu.com.ifce.equipespring.graficaapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.com.ifce.equipespring.graficaapi.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
