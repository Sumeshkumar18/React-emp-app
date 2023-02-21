import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import LoginUser from "./users/LoginUser";
import UserExpences from "./users/UserExpences";
import ExpenseList from "./users/ExpenseList";
import EditExpense from "./users/EditExpense";
import Addcategory from "./Categories/Addcategory";
import CategoryList from "./Categories/CategoryList";
import EditCategory from "./Categories/EditCategory";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Check the current page
    const currentPage = location.pathname;
    console.log({ currentPage });
    if (currentPage === "/" || currentPage === "/register") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [location]);
  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LoginUser />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/edituser/:id" element={<EditUser />} />
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
        <Route exact path="/expenses" element={<UserExpences />} />
        <Route exact path="/expenseList" element={<ExpenseList />} />
        <Route exact path="/editExpense/:id" element={<EditExpense />} />
        <Route exact path="/addCategory" element={<Addcategory />} />
        <Route exact path="/categoryList" element={<CategoryList />} />
        <Route exact path="/editCategory/:id" element={<EditCategory />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
