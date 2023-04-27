import ForgetPassword from "./Components/Pages/ForgetPassword/ForgetPassword";
import OTP from "./Components/Pages/OTP/Otp";
import ResetPassword from "./Components/Pages/ResetPassword/ResetPassword";
import SignIn from "./Components/Pages/SignIn/SignIn";
import SignUp from "./Components/Pages/SignUp/SignUp";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardBc from "./Components/Pages/Dashboard/BC/DashboardBc";
import Layouts from "./Components/Layouts/Layouts";
import Orders from "./Components/Pages/manageOrders/Orders/Orders";
import NewOrder from "./Components/Pages/manageOrders/newCreateOrder/NewOrder";
import OrderInvoice from "./Components/Pages/manageOrders/newOrderInvoice/OrderInvoice";
import AddProduct from "./Components/Pages/addProduct/AddProduct";
import Users from "./Components/Pages/ManageUser/Users/Users";
import AddUser from "./Components/Pages/ManageUser/addUser/AddUser";
import NewUser from "./Components/Pages/ManageUser/newUser/NewUser";

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
          <Route path="/main/*" element={<Layouts />}>
            <Route path="dashboard" element={<DashboardBc />} />
            <Route path="orders" element={<Orders />} />
            <Route path="newOrder" element={<NewOrder />} />
            <Route path="inVoice" element={<OrderInvoice />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="manageUser" element={<Users />} />
            <Route path="addUser" element={<AddUser />} />
            <Route path="newUser" element={<NewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
