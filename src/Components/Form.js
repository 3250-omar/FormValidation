import React, {  useState } from "react";
import RightPhoto from "../assets/images/illustration-sign-up-desktop.svg";
import lo from "../assets/images/icon-list.svg";
import { useNavigate } from "react-router-dom";
export const Form = (event) => {
  const [email, setEmail] = useState("");
  const Thanks = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    (email !== "") & email.includes("@", ".com") && Thanks("/Thanks");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="inputSection">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul>
          <li>
            <img src={lo} alt="Advantages" />
            <label>Product discovery and building what matters</label>
          </li>
          <li>
            <img src={lo} alt="Advantages" />
            <label>Measuring to ensure updates are a success</label>
          </li>
          <li>
            <img src={lo} alt="Advantages" />
            <label>And much more!</label>
          </li>
          <li className="email">
            <label>Email address</label>
            <input
              type="text"
              placeholder="email@company.com"
              onChange={(e) => setEmail(e.target.value)}
              className={email !== "" ? "input" : "error"}
            />
            {(email === "") &&(
              <p className="Emailerror">This field is required</p>
            )}
            {!((email === "")||(email.includes("@", ".com")))&&<p className="Emailerror">Your email isnt in the right form</p>}
          </li>
          <button className="subscribebtn">
            Subscribe to monthly newsletter
          </button>
        </ul>
      </div>
      <div className="PhotoSection">
        <img src={RightPhoto} alt="Prpagand" />
      </div>

    </form>
  );
};
