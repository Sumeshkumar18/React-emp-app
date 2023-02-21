import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
export default function Addcategory() {
  let navigate = useNavigate();
  const [Category, setCategory] = useState({
    category: "",
  });
  const { category } = Category;
  const onInputChange = (e) => {
    setCategory({ ...Category, [e.target.name]: e.target.value });
  };
  const [categoryinputError, setCategoryInputError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setCategoryInputError("");
    if (
      Category.category === "" ||
      Category.category === null ||
      Category.category === undefined
    ) {
      setCategoryInputError("Category is required");
      return;
    }
    axios
      .post(`http://localhost:8080/addCategory`, Category)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    navigate("/categoryList");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">ADD Categories</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label>
                Category:
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                />
                <p className="text-danger">{categoryinputError}</p>
              </label>
              <br />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ float: "right", textAlign: "center", display: "block" }}
            >
              Save
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
