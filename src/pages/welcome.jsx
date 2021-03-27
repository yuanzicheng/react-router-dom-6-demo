import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {

    const navigate = useNavigate();

    const login = () => {
        sessionStorage.setItem("token", "xx");
        navigate("/", { replace: true });
    };

    return (
        <React.Fragment>
            <button ghost onClick={login}>login</button>
        </React.Fragment>
    );
};

export default Welcome;