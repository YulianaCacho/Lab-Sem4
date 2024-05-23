import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Hearder from "./hearder";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Hearder /> 
                <div className="container">
                    <div className="row py-4">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div style={{backgroundColor:'#e6e6e6'}}> <Footer /> </div>
            </StrictMode>
        </>
    );
}

export default Basic;