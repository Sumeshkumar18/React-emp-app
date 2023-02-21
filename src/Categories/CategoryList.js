import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function CategoryList() {
    const [categories,setCategories] = useState([])
    useEffect(() => {  
        loadCategories();
    }, []);

    const loadCategories = async() =>{
        const result = await axios.get(`http://localhost:8080/getAllCategorys`)
        setCategories(result.data);
        console.log(result.data)
    }
    const deleteCategory = async(id) =>{
        await axios.delete(`http://localhost:8080/deleteCategoryById/${id}`);
        loadCategories();
    }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{category.category}</td>
                <td>
                <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editCategory/${category.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCategory(category.id)}
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
  )
}
