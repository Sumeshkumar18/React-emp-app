import React from "react";
import BarChart from "./BarChart";
import Piechart from "./Piechart";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <Piechart />
        </div>
        <div className="col-md-6">
          <BarChart />
        </div>
      </div>
      <div className="row">
       
      </div>
    </div>
  
  );
}
