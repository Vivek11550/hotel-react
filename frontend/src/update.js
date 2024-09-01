import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Update() {
  const { Room } = useParams(); 

  const [formData, setFormData] = useState({
    Room: '',
    Name: '',
    Email: '',
    Status: '',
    price: ''
  });
  

  useEffect(() => {
    async function fetchRoom() {
      try {
        const response = await axios.get(`http://localhost:8081/${Room}`);
        setFormData(response.data[0]);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    }
    fetchRoom();
  }, [Room]);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/update/${Room}`, formData)
      console.log('Data updated successfully.');
      window.location.href = '/admin';
      
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Update Hotel Room</h2>
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
        <button type="submit">Update</button>
      </form>
      <br />
      <Link to={`/admin`}>
                      <button>admin</button>
                    </Link>
    </div>
  );
}

export default Update;
