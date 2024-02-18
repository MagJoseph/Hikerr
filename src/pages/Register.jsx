import React from 'react'
import { useEffect, useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

import Box from "@mui/material/Box";

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
  const [usedInfo, setUsedInfo] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getUserInfo = async () => {
      let usernameArr = []
      let emailArr = []

      let result = await Client.get(`users_info`)
      result.data.usernames.map((name) => {
        usernameArr.push(name.username)
      })
      result.data.emails.map((email) => {
        emailArr.push(email.email)
      })
        let alphaUsernameArr = usernameArr.sort((a, b) => a.localeCompare(b));
        let alphaEmailArr = emailArr.sort((a, b) => a.localeCompare(b));
        setUsernameList(alphaUsernameArr);
        setEmailList(alphaEmailArr);
    }
    getUserInfo()
  }, [])
  

const alertUser = () => {
      setUsedInfo(!usedInfo);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      let formName = !usernameList?.includes(formValues.username);
      let formEmail = !emailList?.includes(formValues.email);

      if (formName && formEmail) {
        if (formValues.password !== formValues.confirmPassword) {
          setError(true)
        }
          await RegisterUser({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
          });
          setFormValues({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          navigate(`/login`);
      }
      setFormValues({
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log("Used info");
      setTimeout(alertUser, 2000);
    };

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
  return (
       <Box className="home">
      <div>
        <h1>Hikrr</h1>
      </div>
      <div className="centered">
          <form className="form centered" onSubmit={handleSubmit}>
              <input
                className="input1"
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="Your Name"
                value={formValues.firstName}
                required
              />
              <input
                className="input1"
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Your Name"
                value={formValues.lastName}
                required
              />
              <input
                className={usedInfo ? "input1" : "input1 user-alert"}
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Username"
                value={formValues.username}
                required
              />
              <input
                className={usedInfo ? "input1" : "input1 red-alert"}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
              <input
                className="input1"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
              <input
                className="input1"
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formValues.confirmPassword}
                required
          />
          <br />
            {error &&
            <div className="error-msg">Passwords don't match, Please try again</div>
          }
             <button
              className="sub-btn"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Sign Up
            </button>
          </form>
       </div>
     
  </Box>
  );
}

export default Register