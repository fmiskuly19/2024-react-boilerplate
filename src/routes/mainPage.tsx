import Navbar from "../components/nav/navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useEffect, useState } from "react";
import LoginPage from "./loginPage";

const MainPage = () => {

    //pre auth stuff
    const isLoggedIn = useAppSelector((state) => state.authSlice.isLoggedIn);
    const [userLoginStatus, setUserLoginStatus] = useState(false)

    useEffect(() => {
        setUserLoginStatus(isLoggedIn);
    }, [isLoggedIn])

    return (
        userLoginStatus ?
            <>
                <Navbar />
                <Outlet />
            </>
            :
            <>
                <Navbar />
                <LoginPage />
            </>
    )
}

export default MainPage;