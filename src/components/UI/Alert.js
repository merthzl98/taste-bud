import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Alert.module.css";

const AlertOverlay = (props) => {
  return (
    <div className={classes.alert}>
      <div className={classes.content}>{props.children}</div>
      <AiOutlineClose onClick={props.onClose} />
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Alert = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <AlertOverlay onClose={props.onClose}>{props.children}</AlertOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Alert;
