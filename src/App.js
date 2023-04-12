import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import OTP from "./Components/Pages/OTP/Otp";
import ResetPassword from "./Components/Pages/ResetPassword/ResetPassword";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardBc from "./Components/Pages/Dashboard/BC/DashboardBc";
import Layouts from "./Components/Layouts/Layouts";
// import Dashboard from "./Components/Pages/Dashboard/SuperAdmin/Dashboard";
import Orders from "./Components/Pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/layout/*" element={<Layouts />}>
            <Route path="dashboard" element={<DashboardBc />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
