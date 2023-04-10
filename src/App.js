import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import OTP from "./Components/Pages/OTP/Otp";
import ResetPassword from "./Components/Pages/ResetPassword/ResetPassword";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/SuperAdmin/Dashboard";
import MonthDropDown from "./Components/Dropdown/MonthDropDown";
import LineChart from "./Components/Chart/LineChart";
import DashboardBc from "./Components/Pages/Dashboard/BC/DashboardBc";
//import FeatureWidgetCard from "./Components/featureWidgetCard/FeatureOrderCard/FeatureOrderCard";
import FeatureValueOrderCard from "./Components/featureWidgetCard/FeatureValueOrderCard/FeatureValueOrderCard";

//fonts

// import "./Assets/fonts/Poppins-Light.ttf";
// import "./Assets/fonts/Poppins-Regular.ttf";
// import "./Assets/fonts/Poppins-Italic.ttf";
// import "./Assets/fonts/Poppins-Thin.ttf";
// import "./Assets/fonts/Poppins-ThinItalic.ttf";
// import "./Assets/fonts/Poppins-ExtraLight.ttf";
// import "./Assets/fonts/Poppins-ExtraLightItalic.ttf";
// import "./Assets/fonts/Poppins-LightItalic.ttf";
// import "./Assets/fonts/Poppins-Medium.ttf";
// import "./Assets/fonts/Poppins-MediumItalic.ttf";
// import "./Assets/fonts/Poppins-SemiBold.ttf";
// import "./Assets/fonts/Poppins-SemiBoldItalic.ttf";
// import "./Assets/fonts/Poppins-Bold.ttf";
// import "./Assets/fonts/Poppins-BoldItalic.ttf";
// import "./Assets/fonts/Poppins-ExtraBold.ttf";
// import "./Assets/fonts/Poppins-ExtraBoldItalic.ttf";
// import "./Assets/fonts/Poppins-Black.ttf";
// import "./Assets/fonts/Poppins-BlackItalic.ttf";

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bc" element={<DashboardBc />} />
          <Route path="/lang" element={<MonthDropDown />} />
          <Route path="/chart" element={<LineChart />} />
          <Route path="/card" element={<FeatureValueOrderCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
