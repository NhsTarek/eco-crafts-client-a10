import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllCrafts from "../Pages/AllCrafts";
import AddCraft from "../Pages/AddCraft";
import MyCraftList from "../Pages/MyCraftList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/craft')
        },
        {
            path: '/allArts&Crafts',
            element: <AllCrafts></AllCrafts>,
        },
        {
            path: '/addCraftItem',
            element: <AddCraft></AddCraft>,
        },
        {
            path: '/myCraftList',
            element: <MyCraftList></MyCraftList>,
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
      ]
    },
  ]);

  export default router;

  