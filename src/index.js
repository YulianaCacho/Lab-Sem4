import React, {StrictMode } from "react";
import { createRoot} from "react-dom/client";


const Message = ()=>{
    return <h1>Message: </h1>;
}

const root = createRoot(document.getElementById("root"));
root.render(
<StrictMode>
    <h1>Titulo desde react</h1>

           <Message message="Hola 1"></Message>
           <Message message="Hola 2"></Message>
           <Message></Message>
           <Message message="ayoh 1"></Message>

           </StrictMode>

);
