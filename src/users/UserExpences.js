import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

export default function UserExpences() {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [expense, setExpense] = useState({
    date: "",
    expenses: "",
    categoryId: "",
    amount: "",
    description: "",
  });
  const uId = 1; //sessionStorage.getItem("userId");
  useEffect(() => {
    axios
      .get("http://localhost:8080/getAllCategorys")
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { expDate, amount, description } = expense;
  const onInputChange = (e) => {
    // console.log(e);
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const [dateinputError, setDateInputError] = useState("");
  const [categoryinputError, setCategoryInputError] = useState("");
  const [amountinputError, setAmountInputError] = useState("");
  const [descriptioninputError, setDescriptionInputError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // setExpense({ ...expense, userId: uId });
    console.log(expense);
    setDateInputError("");
    setCategoryInputError("");
    setAmountInputError("");
    setDescriptionInputError("");
    if (
      expense.expDate === "" ||
      expense.expDate === null ||
      expense.expDate === undefined
    ) {
      setDateInputError("Date is required");
      return;
    }
    if (
      expense.categoryId === "" ||
      expense.categoryId === null ||
      expense.categoryId === undefined
    ) {
      setCategoryInputError("Category is required");
      return;
    }
    if (
      expense.amount === "" ||
      expense.amount === null ||
      expense.amount === undefined
    ) {
      setAmountInputError("Amount is required");
      return;
    }
    if (
      expense.description === "" ||
      expense.description === null ||
      expense.description === undefined
    ) {
      setDescriptionInputError("Description is required");
      return;
    }
    axios
      .post(`http://localhost:8080/addExpense/${uId}`, expense)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    navigate("/expenseList");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Expences</h2>
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
                Date:
                <input
                  type="date"
                  className="form-control"
                  name="expDate"
                  value-={expDate}
                  onChange={(e) => onInputChange(e)}
                />
                <p className="text-danger">{dateinputError}</p>
              </label>
              <br />
            </div>
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
                <select
                  class="form-select"
                  id="exampleFormControlSelect1"
                  name="categoryId"
                  onChange={(e) => onInputChange(e)}
                >
                  <p className="text-danger">{categoryinputError}</p>
                  <option value="-1">Select</option>
                  {categories.map((item) => (
                    <option value={item.id}>{item.category}</option>
                  ))}
                </select>
              </label>
              <br />
            </div>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label>
                Amount:
                <input
                  type="text"
                  className="form-control"
                  name="amount"
                  value={amount}
                  onChange={(e) => onInputChange(e)}
                />
                <p className="text-danger">{amountinputError}</p>
              </label>
              <br />
            </div>
            <div
              className="mb-3"
              style={{
                textAlign: "center",
                display: "block",
                paddingRight: "10px",
              }}
            >
              <label>
                Description:
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
                <p className="text-danger">{descriptioninputError}</p>
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
