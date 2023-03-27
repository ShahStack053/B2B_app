// import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import OTP from "./Components/Pages/OTP/Otp";
// import ResetPassword from "./Components/Pages/ResetPassword/ResetPassword";
// import SignUp from "./Components/Pages/SignUp/SignUp";
// import Dummy from "./Components/Pages/dummy/dummy";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Dummy /> */}
      {/* <SignUp /> */}
      {/* <ForgetPassword /> */}
      {/* <ResetPassword /> */}
      <OTP />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Otp" element={<OTP />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
