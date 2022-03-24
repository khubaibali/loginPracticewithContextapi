import  React,{useContext} from 'react';
import {Route,Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { authContext } from './AuthProvider';
import useAuth from './AuthProvider'


function Login() {
    const navigate = useNavigate();
    let auth= useContext(authContext);
    const {login} = auth;
    
  return (
    <div >
      <h1>Login Page</h1>
      <button onClick={()=>{
          login().then(()=>{
              navigate('/dashboard');   
          })
      }}>Press login</button>        
    </div>
  );
}

export default Login;
