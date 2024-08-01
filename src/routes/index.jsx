import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Protected from "./protected";
import Signup from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import UpdateProfile from "../pages/UpdateProfile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Protected element={Dashboard} />} />
      <Route path="/updateprofile" element={<UpdateProfile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={<h1>page is not Found</h1>} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
