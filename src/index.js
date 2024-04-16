import React, {StrictMode } from "react";
import { createRoot} from "react-dom/client";


const root = createRoot(document.getElementById("root"));
root.render(
<StrictMode>
    <h1>Titulo desde react</h1>
</StrictMode>
);
