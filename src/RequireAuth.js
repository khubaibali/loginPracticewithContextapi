import React,{useContext} from 'react';
import { authContext } from './AuthProvider';
import useAuth  from './customHooks/useAuth';
import { Navigate,useNavigate } from 'react-router-dom';


function RequiredAuth({children}){
    //const {auth}  = useAuth()
    let {auth}= useContext(authContext)
    console.log(auth,'from require auth');
    return auth === true ? children : <Navigate to ="/login" replace/>

}


export default RequiredAuth;