package edu.miu.carRental.domain;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long userId;
	
	@Column(name = "first_name")
	@NotNull(message = "*Please provide first name")
	private String firstName;
	
	@Column(name = "last_name")
	@NotNull(message = "*Please provide last name")
	private String lastName;
	
	@Column(name = "date_of_birth")
	@NotNull(message = "*Please provide date of birth")
	@DateTimeFormat(pattern = "YYYY/MM/dd")
	private LocalDate dateOfBirth;
	
	@Column(name = "email")
	@NotNull(message = "*Please provide email")
	@Email(regexp = "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,3})$",message = "* please provide a valid email")
	private String email;
	
	@Column(name = "phone_number")
	@NotNull(message = "*Please provide phone number")
	@Pattern(regexp = "^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$", message = "* please provide valid phone number")
	private String phoneNumber;
	
	@Column(name = "user_name", unique = true)
	@NotNull(message = "*Please provide user name") 
    private String username;
	
	@Column(name = "password")
	@NotNull(message = "*Please provide password") 
    private String password;
	
	
	@NotNull(message = "*Please provide role") 
	@ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST}, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	private List<Role> roles;
	
	public User() {
		
	}
	public User(User user) {
		this.userId=user.getUserId();
		this.username=user.getUsername();
		this.password=user.getPassword();
		this.email=user.getEmail();
		this.dateOfBirth=user.getDateOfBirth();
		this.firstName=user.getFirstName();
		this.lastName=user.getLastName();
		this.phoneNumber=user.getPhoneNumber();
		this.roles=user.getRoles();
		
		
	}
	public List<Role> getRoles() {
		return roles;
	}
	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

}
