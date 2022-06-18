import React, {useEffect, useState} from "react";
import "./app.scss"
import {Container} from "react-bootstrap";
import Header from "./components/header/header";
import Sidebar from "./components/Sidebar/Sidebar"
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LogiScreen";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const [sidebar, toggleSidebar] = useState(false);


    const handleToggleSidebar = () => toggleSidebar(value => !value)

    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>
            <div className="app_container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
                <Container fluid className="app__main ">
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const {accessToken, loading} = useSelector(state => state.auth);

    const navigate = useNavigate()

    useEffect(()=>{
        if (!loading && !accessToken){
            navigate('/auth')
        }
    },[accessToken, loading, navigate]);

    return (
        <Routes>
            <Route path="/" exact element={<>
                <Layout><HomeScreen/></Layout>
            </>}/>


            <Route path="/auth" element={<LoginScreen/>}/>


            <Route path="/search" element={<>
                <Layout>
                    <h1>Search results</h1>
                </Layout>
            </>}/>

        </Routes>
    )
}

export default App