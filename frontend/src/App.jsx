import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './views/Component/Register/Register';
import  Sign from './views/Layout/sign/Sign'
//import { Login } from './views/Component/Login.jsx';
import {Login} from './views/Component/login/Login.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "../src/components/ui/provider"
import {MainLayout} from './views/Layout/MainLayout/MainLayout.jsx'
import Home from './views/Component/Home/Home.jsx';
import DepressionTest from './views/Component/Test/DepressionTest/DepressionTest';
import AnxietyTest from './views/Component/Test/AnxietyText/AnxietyTest';
import OCDTest from './views/Component/Test/OCDTest/OCDTest';
import SchizophrénieTest from './views/Component/Test/SchizophrénieTest/SchizophrénieTest';
import AnxietyPage from './views/Component/Resources/Anxiety/AnxietyPage';
import OcdPage from './views/Component/Resources/ocd/OcdPage';
import SchizophreniaPage from './views/Component/Resources/Schizophrenia/SchizophreniaPage';
import DepressionPage from './views/Component/Resources/Depression/depresion';
import RegisterDocotor from './views/Component/RegisterDoctor/RegisterDoctor'
import DoctorsView from './views/Component/viewDoctor/viewDoctor';
function App() {
  return(
    <Provider >
      <Routes>
        <Route element={<Sign />} path='/'>
          <Route element={<Register/>} path='Register' />
          <Route  element={<Login/>} index/>
        </Route>
        
        <Route element={<MainLayout/>} path='/home'>
          <Route element={<Home/>} index/>
          <Route element={<AnxietyTest/>} path='AnxietyTest'/>
          <Route element={<OCDTest/>} path='OCDTest'/>
          <Route element={<SchizophrénieTest/>} path='SchizophrénieTest'/>
          <Route element={<DepressionTest/>} path='DepressionTest'/>
          <Route element={<DoctorsView/>} path='admin'></Route>

        </ Route >
        <Route element={<AnxietyPage/>} path='/Axiety'></Route>
        <Route element={<OcdPage/>} path='/OCD'></Route>
        <Route element={<SchizophreniaPage/>} path='/Schizophrénie'></Route>
        <Route element={<DepressionPage/>} path='/Depression'></Route>
        <Route element={<RegisterDocotor/>} path='/RegisterDoctor'></Route>

      </Routes>
    </Provider>
      
    
  )
  
}

export default App;
