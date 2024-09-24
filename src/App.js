import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async() => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)
  }

  const getUserById = async(user_id) => {
    const response = await axios.get(`${BASE_URL}/users/${user_id}`)
    console.log(response.data)
  }

  const createuser = async(new_user) => {
    const response = await axios.post(`${BASE_URL}/users`, new_user)
    console.log("response", response.data)
  }

  const update_user = async(user_id, update_data)=> {
   const response = await axios.patch(`${BASE_URL}/users/${user_id}`, update_data)
  }


  const delete_user_by_id = async(user_id) => {
    const response = await axios.delete(`${BASE_URL}/users/${user_id}`)
    console.log(response)
  }

  useEffect(()=>{
    // getAllUsers()
    
    
    // const new_user = {
    //   "username": "Nureddin",
    //   "password": "111"
    // }
    // createuser(new_user)



    // put: melumati yeniden elave edirmiw kimi update edir
    // patch: movcud melumatin lazim olan hisselerini update edir
    // const update_data = {
    //   "username": "Rza22",
    //   "password": "123"
    // }
    // update_user(1,update_data)



    // delete_user_by_id(2)
    

  },[])

  return (
    <div>

    </div>
  );
}

export default App;
