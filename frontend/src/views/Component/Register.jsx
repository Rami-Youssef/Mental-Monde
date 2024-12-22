

import { useState } from 'react';
import axios from 'axios';
export function Register(){


const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('nothing');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post('http://localhost:9000/api/user/Register', {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
    
    }
  
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={(e) => setEmail(e.target.value)}
          required type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password:</label>
        <input onChange={(e) => setPassword(e.target.value)}
          required type="password" id="password" name="password" placeholder="Enter your password" required />
        
        <button type="submit">Login</button>
        {message && <p>{message}</p>}

      </form>
    </div>
  );
}