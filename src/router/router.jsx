import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";

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
                element:<PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/job-details/${params.id}`)
            }
        ]
    }
])

export default router