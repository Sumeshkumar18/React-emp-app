import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [inputError, setNameInputError] = useState("");
  const [usernameinputError, setUserNameInputError] = useState("");
  const [emailinputError, setEmailInputError] = useState("");
  // const [passwordinputError,setPasswordInputError] = useState("")
  const { name, userName, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setNameInputError("");
    setEmailInputError("");
    setUserNameInputError("");
    if (user.name === null || user.name === "" || user.name === undefined) {
      setNameInputError("Name is required");
      return;
    }
    if (
      user.userName === null ||
      user.userName === "" ||
      user.userName === undefined
    ) {
      setUserNameInputError("User Name is required");
      return;
    }
    if (user.email === null || user.email === "" || user.email === undefined) {
      setEmailInputError("email is required");
      return;
    }
    await axios.post("http://localhost:8080/addUser", user);
    navigate("/home");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              <p className="text-danger">{inputError}</p>
            </div>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label htmlFor="UserName" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Username"
                name="userName"
                value={userName}
                onChange={(e) => onInputChange(e)}
              />
              <p className="text-danger">{usernameinputError}</p>
            </div>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your email address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <p className="text-danger">{emailinputError}</p>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Set your password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
               <p className="text-danger">{passwordinputError}</p>
            </div> */}
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
