import React, { useState } from 'react'

export function useAuth(){
    let [auth,setAuth] = useState(Boolean(localStorage.getItem('auth')));
    return {
        auth,
        login(){
            return new Promise((res,rej)=>{
                console.log('login called')
                window.localStorage.setItem('auth','login');
                setAuth(true);
                res();
            })
        },
        logout(){
            return new Promise((res,rej)=>{
                console.log('logout called')
                localStorage.removeItem('auth');
                setAuth(false);
                res();
            })
        }
    }
}
