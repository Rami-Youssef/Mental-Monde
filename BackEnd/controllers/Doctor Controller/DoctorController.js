import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../FireBase/firebaseConfig.js'; 

export const RegisterDoctor = async (req, res) => {
  try {    const { fullname, status, occupation, email, phone } = req.body;

    if (!fullname || !occupation || !email || !phone) {
      return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    const newDoctor = {
      fullname,
      status: status || 0, 
      occupation,
      email,
      phone,
      createdAt: new Date().toISOString(), 
    };

    const docRef = await addDoc(collection(database, 'doctors'), newDoctor);

    return res.status(201).json({
      message: 'Docteur enregistré avec succès.',
      doctorId: docRef.id,
      doctor: newDoctor,
    });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du docteur:', error);
    return res.status(500).json({ message: 'Une erreur s\'est produite. Veuillez réessayer.' });
  }
};
