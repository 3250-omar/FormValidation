import React from "react";
import Verivied from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
export const Success = () => {
  const Back =useNavigate()
  const submitHandler=(event)=>{
    event.preventDefault();
    Back('/')
  }
  return (
    <form className="Thanks" onSubmit={submitHandler}>
      <img src={Verivied} alt="Welldone" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </form>
  );
};
