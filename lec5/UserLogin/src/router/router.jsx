import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/forgot",
        element: <ForgotPassword />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
]);

export default router;