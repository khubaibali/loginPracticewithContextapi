import react, { createContext ,useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import  {useAuth}  from './customHooks/useAuth';

export const authContext = createContext();

export function AuthProvider({children}){
    const auth = useAuth();
    
    console.log(auth,'from authprovider')
    
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer(){
    console.log('from auth consumer')
    return  useContext(authContext);
}
