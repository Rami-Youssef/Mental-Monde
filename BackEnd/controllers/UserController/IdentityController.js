import { firebaseapp, database } from '../../FireBase/firebaseConfig.js';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

let auth = getAuth();
const collectionRef = collection(database, 'users');
export const Register= (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
          res.status(200).json({ message: 'User created successfully', user: userCredential.user });
        })
       .catch((error) => {
          res.status(400).json({ message: error.message });
        });
    } else {
      res.status(401).json({ message: 'Email and password are required' });
    }
  };
  
 export const Login= async (req, res) => {
   const email = req.body.email;
   const password = req.body.password;

   if (email && password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      res.status(200).json({ message: JSON.stringify(userCredential)   });
    } catch (error) {

      res.json({message: "invalid email/password"});
      
      
    }

       
   } else {
     res.status(401).json({ message: 'Email and password are required' });
   }}