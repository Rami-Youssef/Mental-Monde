import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { RegisterDoctor } from './controllers/Doctor Controller/DoctorController.js';
import { database2 } from './FireBase/firebaseDatabase.js';
import { get, ref } from 'firebase/database';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',userRoutes);

app.post('/api/doctor', RegisterDoctor);

app.get("/doctors", async (req, res) => {
  try {
    const doctorsRef = ref(database2, 'doctors');  
    
    const snapshot = await get(doctorsRef);

      return snapshot;
    
  } catch (error) {
    console.error("Erreur lors de la récupération des docteurs:", error);
    return res.status(500).json({
      message: "Erreur lors de la récupération des docteurs.",
      error: error.message,
    });
  }
});


const port = 9000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

