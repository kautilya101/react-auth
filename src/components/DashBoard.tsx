import React, { useState } from 'react'
import Login from './Login';
import useToken from '../hooks/useToken';


export default function DashBoard() {

  const {token,setToken} = useToken();
  
  if(!token){
    return (
    <>
      <Login setToken={setToken}/>
    </>)
  }


  return (
    <div>
      <h1 className='dashboard__container'>Welcome to the Dashboard</h1>
    </div>
  )
}
