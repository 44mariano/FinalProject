import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({  // Form information and data
    username: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => { // Form is submitted
    e.preventDefault();
    try { // Form is success
      const response = await axios.post('/api/accounts/register', formData);
      console.log(response.data);
    } catch (error) { // If form fails
      console.error(error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return ( // Form html
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default RegisterForm;
