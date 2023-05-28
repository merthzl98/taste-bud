import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Form.module.scss";
const Form = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.pereventDefault();
    console.log("submitted");
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitFormHandler}>
        <div className={classes.container}>
          <h2>Login</h2>

          <div className={classes.input}>
            <input
              id="e-mail"
              type="e-mail"
              placeholder="E-mail"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              value={enteredPassword}
            />
          </div>

          <div className={classes.actions}>
            <button onClick={props.onClose}>Cancel</button>
            <button className={classes.submit}>Submit</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Form;
