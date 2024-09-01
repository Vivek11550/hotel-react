import React, { useState } from 'react';
import axios from 'axios';
import './update.css';
import { Link } from 'react-router-dom';



function Create() {
  const [formData, setFormData] = useState({
    Room: '',
    Name: '',
    Email: '',
    Status: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/create', formData);
      console.log('Data inserted successfully.');
  
      window.location.href = '/admin';
    } catch (error) {
      console.error('Error inserting data:', error);
      
    }
  };  

  return (
    <div>
      <h2>Book New Hotel Room </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Room:
          <input type="text" name="Room" value={formData.Room} onChange={handleChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Status:
          <input type="text" name="Status" value={formData.Status} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">check-in</button>
      </form>
      <br />
      <Link to={`/admin`}>
                      <button>admin</button>
                    </Link>
    
      
    </div>
  );
}

export default Create;
