import express from 'express';
const app = express();
const port = 3000;

import {firebaseapp } from './FireBase/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

app.get('/', (req, res) => {
    return <div>hi</div>; // Provide the absolute path to login.html
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

