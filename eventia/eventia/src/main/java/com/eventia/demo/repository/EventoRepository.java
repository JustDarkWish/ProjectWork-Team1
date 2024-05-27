package com.eventia.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventia.demo.entity.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long>{

	// @Query(value = "select * from evento where titolo = ?1", nativeQuery = true)
	Optional<Evento> findByTitolo(String titolo);
	
	
}
