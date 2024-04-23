import 'bootstrap/dist/css/bootstrap.min.css'
import React, {StrictMode } from "react";
import {createRoot} from "react-dom/client";
import Header from "./heard";
import Carrusel from "./main";
import Aside from "./aside";
import Footer from "./footer";
const feather =require ('feather-icons');


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
           <Header></Header>
           <div className="conteiner">
             <div className="row">
                <div className="col-md-6">
                   <Carrusel></Carrusel>
              </div>
              <div className="col-md-3">
                    <Aside></Aside>
                 </div>
              </div>
            </div>
           <Footer></Footer>
    </StrictMode>

);
