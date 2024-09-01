import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {

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

      const response = await axios.post('http://localhost:8081/signup', formData);
      console.log('User signed up successfully:', response.data);
      
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing up:', error);
  
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
