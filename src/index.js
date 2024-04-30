
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {StrictMode } from "react";
import {createRoot} from "react-dom/client";
import Header from "./layout/heard";
import Carrusel from "./layout/carrusel";
import Aside from "./layout/aside";
import Footer from "./layout/footer";
import Description from "./layout/description";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Single from './Single';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
  },
  {
    path: " /detalle",
    element: <Single/>,
  },
  
]);

const feather = require('feather-icons');
setTimeout (() =>{
    feather.replace();
}, 1000);

const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

);
