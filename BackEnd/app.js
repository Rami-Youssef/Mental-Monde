import express from 'express';
import bodyParser  from 'body-parser';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user',userRoutes)
app.get('/', (req, res) => res.status(200).json({ message: 'Email and password are required' }));

import {firebaseapp } from './FireBase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const port = 9000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

