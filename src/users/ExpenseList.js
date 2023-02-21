import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
export default function ExpenseList() {
    const [expenses, setExpenses] = useState([]);
    useEffect(() => {
        loadExpenses();
        
    }, []);
    const loadExpenses = async () => {
        const result = await axios.get("http://localhost:8080/getAllExpenses");
        setExpenses(result.data);
        console.log(result.data);
      };
      const deleteExpense = async (id) => {
        await axios.delete(`http://localhost:8080/deleteExpense/${id}`);
        loadExpenses();
      };
      
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Date</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{expense.expDate}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>
                <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editExpense/${expense.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                  </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
