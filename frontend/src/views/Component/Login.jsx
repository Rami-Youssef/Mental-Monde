import { useState } from "react";
import axios, { Axios } from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseapp } from "../../FireBase/firebaseConfig";
export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Message, setMessage] = useState('nothing');
    const [image, setImage] = useState('nothing');

    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebaseapp)

    const GoogleAuth = async ()=>{
        let result = await signInWithPopup(auth,provider);
        console.log(result);
        const photoURL = result.user.photoURL;
        setImage(photoURL)
      
        

    }
    const HandleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const result = await axios.post('http://localhost:9000/api/user/Login',
                {email, password})
            setMessage(result.data.message);
            
        }
        catch(error){
            
                console.error('Error:', error);
                setMessage(error.response?.data?.message || 'Something went wrong');
              
        }
    }



    return(
        <form action="" onSubmit={HandleSubmit}>
            <input type="text"  placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <img src={image} alt="the image" />
            {image}
            <input type="submit" />
            <input type="button" onClick={GoogleAuth} value="google"/>
            
        </form>
    )
}