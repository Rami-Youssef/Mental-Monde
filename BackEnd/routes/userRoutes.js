import express from 'express';
import {Register,Login} from '../controllers/UserController/IdentityController.js'
const router = express.Router();

router.post('/Register', Register);
router.post('/Login', Login);

export default router;  
