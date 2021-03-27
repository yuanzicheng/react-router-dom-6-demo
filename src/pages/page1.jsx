import React from "react";
import { Outlet } from "react-router";

const Main = (props) => {
    return (
        <React.Fragment>
            <p>page 1</p>
            <Outlet />
        </React.Fragment>
    );
};

export default Main;