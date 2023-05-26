import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import {Home} from "./pages";

const router=createBrowserRouter([
    {
        path:"/",
        
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])
export default router