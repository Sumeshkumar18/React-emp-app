import axios from "axios";
import React,{ useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditExpense() {
    let navigate = useNavigate();
    const { id } = useParams();
const [expense, setExpense] = useState({
    expdate: "",
    category: "",
    amount: "",
    description:""
  });

  const { expDate, category, amount,description } = expense;

  const onInputChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadExpense();
  }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/updateExpense/${id}`, expense);
        navigate("/expenseList");
      };
      const loadExpense = async () => {
        const result = await axios.get(`http://localhost:8080/getExpenseById/${id}`);
        setExpense(result.data);
      };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Expense</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="expDate" className="form-label">
                Date
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Date"
                name="expDate"
                value={expDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your amount"
                name="amount"
                value={amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/expenseList">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
