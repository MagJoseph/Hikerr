import React from 'react'
import { useEffect, useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

const Register = () => {

  let navigate = useNavigate()

  //set form values
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
})

  const [usernameList, setUsernameList] = useState()
  const [emailList, setEmailList] = useState()
  const [usedInfo, setUsedInfo] = usedState(true)

  useEffect(() => {
    const getUserInfo = async () => {
      let usernameArr = []
      let emailArr = []
    }
  })
  
  return (
    <div>Register</div>
  )
}

export default Register