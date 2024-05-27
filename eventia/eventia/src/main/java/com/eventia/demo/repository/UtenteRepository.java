package com.eventia.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eventia.demo.entity.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Integer> {

	Utente findByEmail(String email);

	Optional<Utente> findByEmailAndPassword(String email, String password);

	@Modifying
	@Query(value= "delete from utente where utente_id = ?1", nativeQuery = true)
	void cancellaUtente();

	Optional<Utente> findByUtenteId(Long utenteId);
}
