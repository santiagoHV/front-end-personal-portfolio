import React from "react";
import './Alert.css'

const Alert = (props) => {
    return (
        <div className="my-alert" role="alert">
        {props.message}
        </div>
    );
}

export default Alert;