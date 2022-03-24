import React from 'react';
import {Route,Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useAuth from './AuthProvider'


function Logout() {
    const navigate = useNavigate();
    const {logout} = useAuth();
  return (
    <div >
      <h1>Logout Page</h1>
      <button onClick={()=>{
            logout().then(()=>{
              navigate('/login')
          })
      }}>Press Logout</button>        
    </div>
  );
}

export default Logout;
