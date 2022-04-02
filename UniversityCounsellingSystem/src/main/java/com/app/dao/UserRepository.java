package com.app.dao;




import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;


import com.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	
	Optional<User> findByEmailAndPassword(String email,String password);
	/*
	 * //@
	 * Query("Select u from User u where u.email=:email and BINARY u.password=:password"
	 * )
	 * 
	 * @Query(value =
	 * "select * from users_tbl where email_id=?1 and binary password=?2",
	 * nativeQuery = true) User authenticateUser( String email, String password);
	 */


}
