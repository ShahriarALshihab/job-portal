import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/sign-in',
                element:<Login></Login>
            },
            {
                path: '/job-details/:id',
                element:<JobDetails></JobDetails>,
                loader:({params})=> fetch(`http://localhost:5000/job-details/${params.id}`)
            },
            {
                path: '/applyJob/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
                
               
            },
            {
                path: '*',
                element:<NotFound></NotFound>
            },
        ]
    }
])

export default router