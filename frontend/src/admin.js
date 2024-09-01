import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8081/');
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (Room) => {
    try {
      await axios.delete(`http://localhost:8081/delete/${Room}`);
      setRooms(rooms.filter(room => room.Room !== Room));
      console.log('Data deleted successfully.');
    } catch (error) {
      console.error('Error deleting data:', error);
      
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="dashboard">
        <div className="data-container">
          <h3>Room Data</h3>
          <table>
            <thead>
              <tr>
                <th>Room</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th> 
                <Link to={`/create`}>
                      <button>New Room</button>
                    </Link>
              </tr>
            </thead>
            <tbody>
              {rooms.map(room => (
                <tr key={room.Room}>
                  <td>{room.Room}</td>
                  <td>{room.Name}</td>
                  <td>{room.Email}</td>
                  <td>{room.Status}</td>
                  <td>{room.price}</td>
                  <td>
                    <button onClick={() => handleDelete(room.Room)}>check-out</button>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <Link to={`/update/${room.Room}`}>
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
