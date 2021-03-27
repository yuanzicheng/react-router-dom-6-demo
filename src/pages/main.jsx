import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Main = (props) => {

    const navigate = useNavigate();

    const nav = (path) => {
        navigate(path);
    }
    
    return (
        <React.Fragment>
            <div>
                <p>main page</p>
                <button onClick={() => nav("/")}>Home</button>
                <button onClick={() => nav("/page1")}>page1</button>
                <button onClick={() => nav("/page2")}>page2</button>
                <button onClick={() => nav("/page3")}>page3</button>
                <button onClick={() => nav("/page1/page1-1")}>page1-1</button>
                <button onClick={() => nav("/page1/page1-2")}>page1-2</button>
                <button onClick={() => nav("/page1/page1-3")}>page1-3</button>
                <Outlet />
            </div>
        </React.Fragment>
    );
};

export default Main;