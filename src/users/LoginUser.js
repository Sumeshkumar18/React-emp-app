import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginUser() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", false);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userName + " " + password);
    var user = { userName: userName, password: password, userType: userType };
    axios
      .post("http://localhost:8080/loginUser", user)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    sessionStorage.setItem("userType", userType);
    navigate("/dashboard");

    // sessionStorage.setItem("isLoggedIn", true);
    // navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Login User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label
                htmlFor="UserName"
                className="form-label"
                style={{
                  textAlign: "center",
                  display: "block",
                  paddingRight: "10px",
                }}
              >
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Username"
                name="userName"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="Password"
                className="form-label"
                style={{
                  textAlign: "center",
                  display: "block",
                  paddingRight: "10px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="UseType"
                className="form-label"
                style={{
                  textAlign: "center",
                  display: "block",
                  paddingRight: "10px",
                }}
              >
                User Type
              </label>
              <div class="form-check" style={{
                    paddingLeft:"240px"
                  }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="userType"
                  value="A"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  
                />
                
                <label
                  class="form-check-label"
                   for="flexRadioDefault1"
                  checked
                  
                >
                  Admin
                </label>
              </div>
              <div class="form-check"  style={{
                    paddingLeft:"240px"
                  }}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="userType"
                  value="U"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault1"
                  checked
                >
                  User
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ float: "right", textAlign: "center", display: "block" }}
            >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
