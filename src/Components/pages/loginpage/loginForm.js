import React, { useState } from 'react';
import axios from 'axios';
import styles from './LoginModule.css';

function Login() {
  // Define formData and error state variables
  const [formData, setFormData] = useState({
    name: '',
    password: '',
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
    if (!formData.name && !formData.password) formErrors.name = "Invalid name or password";
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
        placeholder="Username"
        className={styles.input}
      />
      {errors.name && <div className={styles.error}>{errors.name}</div>}
      {/* Add other form fields here */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className={styles.input}
      />
      {errors.password && <div className={styles.error}>{errors.password}</div>}
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
}

export default Login