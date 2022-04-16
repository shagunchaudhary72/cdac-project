package com.app.pojos;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@Table(name = "users_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
//name | email_id | password | role | phone_no
public class User extends BaseEntity {
	@NotBlank(message = "Name must be supplied")
	private String name;
	@Column(name = "email_id", unique = true) // adds unique constraint
	@NotBlank(message = "email can't be blank")
	@Email(regexp = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])", message = "Email is not valid")
	// Regex for email validation
	private String email;
	@Column(nullable = false) // varchar(30), NOT NULL constraint
	private String password;
	@Enumerated(EnumType.STRING) // => column : varchar
	private Role role;
	@Column(name = "phone_no")
	@Pattern(regexp = "^\\d{10}$", message = "Invalid Phone Number")
	private String phoneNo;
		
}
