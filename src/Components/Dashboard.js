import React from "react";

export function Dashboard() {
  return (
       <div style={{ background: "whitesmoke" }} className="dashboard-Page">
      <div style={{ borderLeftColor: "#1cc88a" }} className="card-component">
        <h6 style={{ color: "#1cc88a" }}> Earnings (Annualy)</h6>
        <h4>$56,000</h4>
      </div>
      <div style={{ borderLeftColor: "#4e73df" }} className="card-component">
        <h6 style={{ color: "#4e73df" }}>Earnings (Monthly)</h6>
        <h4>$2,000</h4>
      </div>
      <div style={{ borderLeftColor: "#f6c23e" }} className="card-component">
        <h6 style={{ color: "#f6c23e" }}>Tasks</h6>
        <h4>20</h4>
      </div>
      <div style={{ borderLeftColor: "#e74a3b" }} className="card-component">
        <h6 style={{ color: "#e74a3b" }}>Pending Requests</h6>
        <h4>10</h4>
      </div>
    </div>
    
  );
}
