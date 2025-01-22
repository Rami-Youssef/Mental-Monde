import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../FireBase/firebaseConfig"; // Ensure this is the correct path to your Firebase config

const DoctorsView = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(false);

  const fallbackDoctors = [
    {
      id: "1",
      name: "Dr. Jean Dupont",
      email: "jean.dupont@example.com",
      phone: "+33 6 12 34 56 78",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "2",
      name: "Dr. Marie Curie",
      email: "marie.curie@example.com",
      phone: "+33 6 23 45 67 89",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "3",
      name: "Dr. Paul Valéry",
      email: "paul.valery@example.com",
      phone: "+33 6 34 56 78 90",
      image: "https://via.placeholder.com/100",
    },
  ];

  useEffect(() => {
    // const doctorsRef = ref(database, "doctors");
    // try {
    //   onValue(doctorsRef, (snapshot) => {
    //     const data = snapshot.val();
    //     if (data) {
    //       const doctorsList = Object.entries(data).map(([id, doctor]) => ({
    //         id,
    //         ...doctor,
    //       }));
    //       setDoctors(doctorsList);
    //     } else {
    //       setDoctors([]);
    //     }
    //   });
    // } catch (err) {
    //   console.error("Unexpected error:", err);
    //   setError(true);
    // }

    setDoctors(fallbackDoctors); 
  }, []);

  const displayedDoctors = error || doctors.length === 0 ? fallbackDoctors : doctors;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Liste des Docteurs</h1>
      {error && (
        <p style={{ textAlign: "center", color: "red" }}>
          Une erreur est survenue. Affichage des docteurs par défaut.
        </p>
      )}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Nom
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Email
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Téléphone
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Image
            </th>
          </tr>
        </thead>
        <tbody>
          {displayedDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                {doctor.name}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                {doctor.email}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                }}
              >
                {doctor.phone}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={doctor.image}
                  alt={`Portrait of ${doctor.name}`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsView;
