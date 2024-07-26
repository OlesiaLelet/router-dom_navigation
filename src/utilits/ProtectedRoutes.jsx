import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";



 const ProtectedRoutes = () => {

    const [isNotAdmin, setIsNotAdmin] = useState(false);
    const adminEmail = "admin@mail.com";

    useEffect ( () => {

        const emailStore = localStorage.getItem("email");
      

             if(emailStore!==adminEmail) {
                setIsNotAdmin(true);  
   
             }

           
    }, []);
  


    
    return isNotAdmin ?  <Navigate to={"/signIn"}/> : <Outlet/>
}
export default ProtectedRoutes;