
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {StrictMode } from "react";
import {createRoot} from "react-dom/client";
import Header from "./heard";
import Carrusel from "./carrusel";
import Aside from "./aside";
import Footer from "./footer";
import Description from "./description";
const feather = require('feather-icons');
setTimeout (() =>{
    feather.replace();
}, 1000);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
           <Header></Header>
           <div className="conteiner">
             <div className="row">
                <div className="col-md-6">
                   <Carrusel></Carrusel>
                   <Description></Description>
              </div>
              <div className="col-md-3">
                    <Aside></Aside>
                 </div>
              </div>
            </div>
           <Footer></Footer>
    </StrictMode>

);
