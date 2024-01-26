import React ,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom"
//import Aboutus from "./components/Aboutus"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
//import Grocery from "./components/Grocery"

const Applayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const Grocery=lazy(()=>import("./components/Grocery"))
const Aboutus=lazy(()=>import("./components/Aboutus"))

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/aboutus",
                element:<Suspense fallback={<h1>Getting you details about the Product and the founders in a jiffy.... </h1>}><Aboutus/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>                
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>               
            }

        ],
        errorElement:<Error/>
    }
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)


