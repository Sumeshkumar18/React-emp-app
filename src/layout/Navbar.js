import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [userType, setUserTpye] = useState("");

  useEffect(() => {
    const SS_UT = sessionStorage.getItem("userType");
    console.log({SS_UT})
   if( SS_UT=== "A"){
    setUserTpye("A")
   }else{
    setUserTpye("U")
   }
   
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            User Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="co llapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            {/* Category  */}
          {userType=== 'A' && <div className="btn dropdown" >
              <button
                className="btn btn-outline-light mx-2 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/addCategory">
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/categoryList">
                    Category List
                  </Link>
                </li>
              </ul>
            </div>}
            {/* <Link className="btn btn-outline-light mx-2" to="/expenses">
            Expenses
          </Link> */}
            <div className="btn dropdown">
              <button
                className="btn btn-outline-light mx-2 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Expenses
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/expenses">
                    Add Expenses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/expenseList">
                    Expense List
                  </Link>
                </li>
              </ul>
            </div>

            <Link className="btn btn-outline-light mx-2" to="/adduser">
              Register User
            </Link>
            <Link className="btn btn-outline-light mx-2" to="/">
              Log out
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
