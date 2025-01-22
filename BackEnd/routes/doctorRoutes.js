import express from 'express';
import { RegisterDoctor } from '../controllers/Doctor Controller/DoctorController';
const router = express.Router();

router.post('/Register', ()=>{
    return 'work'
});

export default router; 