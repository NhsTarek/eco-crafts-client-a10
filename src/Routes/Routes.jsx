import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllCrafts from "../Pages/AllCrafts";
import AddCraft from "../Pages/AddCraft";
import MyCraftList from "../Pages/MyCraftList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import UpdatePage from "../Pages/UpdatePage";
import ViewDetails from "../Pages/ViewDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://ecocrafts-hub-server.vercel.app/craft')
        },
        {
            path: '/craft/:id',
            element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`https://ecocrafts-hub-server.vercel.app/craft/${params.id}`)
        },
        {
            path: '/allArts&Crafts',
            element: <AllCrafts></AllCrafts>,
            loader: () => fetch('https://ecocrafts-hub-server.vercel.app/craft'),
        },
        {
            path: '/addCraftItem',
            element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>,
        },
        {
            path: '/myCraftList',
            element: <PrivateRoutes><MyCraftList></MyCraftList></PrivateRoutes>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/errorpage',
            element: <ErrorPage></ErrorPage>
        },
        
        {
            path: '/updatepage/:id',
            element: <PrivateRoutes><UpdatePage></UpdatePage></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
        },
        
      ]
    },
  ]);

  export default router;

  