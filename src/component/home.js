import React from "react";
import { store } from "../store";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";


function Home() {
    const dispatch = useDispatch();
    const Logout = () =>{
        dispatch(logout());
        window.location.replace('/login');

    }

    return(
        <>
        <h1>
                <button onClick={Logout}>
                    Logout User
                </button>
        </h1>
        </>
    )
};

export default Home;