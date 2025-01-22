import {Outlet} from 'react-router-dom'
import './Sign.scss'
import { Image, Stack } from '@chakra-ui/react'
import logo  from "./logo.png";

export default function Sign(){




    return(
        <div>
            <div id='login'></div>

            <Stack direction={"row"} className='container'>
                <div className='child'>
                    <div className='child-content'>
                    
                        <Image className='logo' src={logo}  alt='logo'/>
                    
                        <h2>
                            Mental'Monde
                        </h2>
                    </div>
                    </div>


                <div className="sign">
                    <Outlet />
                </div>





            </Stack>
            </div>
        
    )

}