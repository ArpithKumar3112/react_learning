import React ,{lazy,Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom"
//import Aboutus from "./components/Aboutus"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import Shimmer from "./components/Shimmer"
import UserContext from "../utils/USerContext"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import Cart from "./components/CArt"
//import Grocery from "./components/Grocery"

const Applayout=()=>{

    const[userName,setUserName]=useState();
    useEffect(()=>{
        const data={
            name:"Arpith Kumar",
        }
        setUserName(data.name)
    })


    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app ">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
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
                path:"/cart",
                element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>               
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


