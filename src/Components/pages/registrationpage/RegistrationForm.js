import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  // Define formData and error state variables
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  // Define handleChange
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Define handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    let formErrors = {};
    if (!formData.name) formErrors.name = "Cannot be empty";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Invalid email";
    if (formData.password !== formData.confirmPassword) formErrors.password = "Passwords should be the same";
    setErrors(formErrors);

    // If no errors, submit form
    if (Object.keys(formErrors).length === 0) {
      axios.post('/api/registration', formData)
        .then(response => {
          // Handle response
        })
        .catch(error => {
          // Handle error
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className={styles.input}
      />
      {errors.name && <div className={styles.error}>{errors.name}</div>}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className={styles.input}
      />
      {errors.email && <div className={styles.error}>{errors.email}</div>}
      {/* Add other form fields here */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className={styles.input}
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        className={styles.input}
      />
      {errors.password && <div className={styles.error}>{errors.password}</div>}
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
}

export default RegistrationForm;
