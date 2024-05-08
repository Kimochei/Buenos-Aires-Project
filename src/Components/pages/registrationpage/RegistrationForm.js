import React, { useState } from 'react';
import axios from 'axios';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: ''  
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};
    if (!formData.name) formErrors.name = "Name cannot be empty";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = "Invalid email";
    if (!formData.password) formErrors.password = "Password cannot be empty";
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords do not match";  

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      axios.post('/api/users', formData)
        .then(response => {
          // Handle successful registration
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
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className={styles.input}
      />
      {errors.password && <div className={styles.error}>{errors.password}</div>}
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        className={styles.input}
      />
      {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
}

export default RegistrationForm;
