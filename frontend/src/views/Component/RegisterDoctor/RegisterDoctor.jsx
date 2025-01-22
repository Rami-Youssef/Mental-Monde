// DoctorForm.js
import React, { useState } from 'react';
import axios from 'axios';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    status: 0,
    occupation: '',
    email: '',
    phone: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9000/api/doctor', formData);
      alert('Le docteur a été créé avec succès.');
    } catch (error) {
      console.error('Erreur lors de la création du docteur:', error);
      alert('Erreur: Veuillez réessayer.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{
        padding: '20px',
        maxWidth: '500px',
        width: '100%',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Créer un Docteur</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="fullname" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Nom Complet:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color:'black',
                backgroundColor: '#ffffff',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="occupation" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Occupation:</label>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                color:'black',
                backgroundColor: '#ffffff',
              }}
            >
              <option value="">Sélectionnez</option>
              <option value="Depression">Dépression</option>
              <option value="OCD">TOC</option>
              <option value="Schizophrenie">Schizophrénie</option>
              <option value="Anixety">Anxiété</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                color:'black',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: '#ffffff',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="phone" style={{ fontWeight: 'bold', marginBottom: '5px', color: '#555' }}>Numéro de Téléphone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                color: 'black',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: '#ffffff',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '10px 15px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Créer
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorForm;