import React, {StrictMode } from "react";
import {createRoot} from "react-dom/client";
import Header from "./heard";
import Carrusel from "./carrusel";
import Aside from "./aside";
import Footer from "./footer";


const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
           <Header></Header>
           <div className="conteiner">
             <div className="row">
                <div className="col-md-8">
                   <Carrusel></Carrusel>
              </div>
              <div className="col-md-4">
                    <Aside></Aside>
                 </div>
              </div>
            </div>
           <Footer></Footer>
    </StrictMode>

);
