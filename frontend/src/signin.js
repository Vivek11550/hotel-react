import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:8081/signin', formData);
      console.log('User signed in successfully:', response.data);
      window.location.href = '/home';
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Invalid email or password. Please try again.');
      window.location.href = '/signup';
      
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
