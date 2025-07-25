import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../modules/admin/components/Dashboard";
import { AdminLayout } from "../modules/admin/pages/AdminLayout";
import Login from "../modules/auth/pages/Login";
import { HomeLayout } from "../modules/home/pages/HomeLayout";
import Home from "../modules/home/components/Home";






const router = createBrowserRouter([
//auth routes

   {
  path: "/",
  element: <Login/>,
},


//admin routes

{
   path: "/admin",
element: <AdminLayout/>,

children:[
  {
  path: "/admin/dashboard",
  element: <Dashboard />,
},
]
},


//home routes 

{
   path: "/web",
element: <HomeLayout/>,

children:[
  {
  path: "/web/home",
  element: <Home />,
},
]
},
]);




const Routes = () => {

  return <RouterProvider router={router}> </RouterProvider>;

};

export default Routes; 
