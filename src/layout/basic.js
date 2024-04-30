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
                    <div className="row py-5">
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;