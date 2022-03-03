import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
//import './SignIn.css';
import { Navigate } from 'react-router-dom';


const LoginForm = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitLoginForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ?(
         <Login submitForm={submitLoginForm} /> 
      ):(
       // <Navigate to="/navi"/>
       <Dashboard/>
       
      )}
      
    </div>
  );
};

export default LoginForm;
