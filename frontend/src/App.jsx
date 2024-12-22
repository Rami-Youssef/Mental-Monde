import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './views/Component/Register.jsx';

//import { Login } from './views/Component/Login.jsx';
import {Login} from './views/Component/login/Login.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "../src/components/ui/provider"




function App() {
  return(
    <Provider >
      <Routes>
        <Route element={<Sign />} path='/sign'>
          <Route element={<Register/>} path='/Register' />
          <Route  element={<Login/>} index/>
        </Route>
      </Routes>
    </Provider>
      
    
  )
  
}

export default App;
