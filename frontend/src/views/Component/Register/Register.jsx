import React, { useEffect } from 'react'
import axios from 'axios';
import './Register.scss';
import GWImage from "./GW.png";
import GDImage from "./GD.png";

import {Input,Image, HStack,Group, Box, Button, Heading,Text} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { CloseButton } from "../../../components/ui/close-button"
import { InputGroup } from "../../../components/ui/input-group"
import { useState } from "react";
import  { Axios } from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseapp } from "../../../FireBase/firebaseConfig";



import { useNavigate } from 'react-router-dom'





export  function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Message, setMessage] = useState('nothing');
  const [image, setImage] = useState('nothing');
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseapp)


  const eyeOff=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
  const eyeOn=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)



const HandleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/user/Register', {
        email,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage(error.response?.data?.message || 'Something went wrong');
    }

}

   

  return (
    <div className='LoginContainer'>
      
      <Heading as='h1' color='teal.600'>Sign Up</Heading>
      
      <Box p={5} shadow='md' id='box'> 
      <form onSubmit={HandleSubmit}> 
        <h4>Email</h4>
        <Input required  
          focusRingColor='teal.400' 
          color='black'
          marginLeft={"15px"} 
          marginBottom={"20px"} 
          size='md' 
          variant='outline'  
          htmlSize={4} 
          width="88%" 
          height="35px" 
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        

        <h4>Password</h4>
        <Group attached size='md'  marginLeft={"15px"} marginBottom={"20px"}  variant='outline'  width="88%" >
            <Input required
              color='black'
              focusRingColor='teal.400'
              pr='4.5rem'
              height="37px"
              type={show ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
            />
              <Button h='28px'  id='eye' size='sm' onClick={handleClick} height="37px" variant='outline'>
                {show ? eyeOff : eyeOn}
              </Button>
        </Group>
      <HStack width="full" gap="10" justifyContent='space-evenly'>
        <Button type='submit' className='button'  backgroundColor={'teal'} colorScheme='teal' color={"white"} variant="solid">Validate</Button>
      </HStack>
      <Text color="red.500">{Message}</Text>
      </form>

      </Box>

    </div>
  )
}
