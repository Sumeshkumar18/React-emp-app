import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function EditCategory() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [Category, setCategory] = useState({
    category: "",
  });
  const { category } = Category;
  const onInputChange = (e) => {
    setCategory({ ...Category, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadCategory();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateCategory/${id}`, Category);
    navigate("/categoryList");
  };
  const loadCategory = async () => {
    const result = await axios.get(
      `http://localhost:8080/getCategoryById/${id}`
    );
    setCategory(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Expense</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your category"
                name="category"
                value={category}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary"
              style={{ float: "right", textAlign: "center", display: "block" }}
            >
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/expenseList">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
