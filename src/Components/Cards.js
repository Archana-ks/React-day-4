import React from "react";

export function Cards() {
  return (
    <div style={{ background: "" }} className="Utilities-Page">
      <div style={{ borderLeftColor: "#858796" }} className="card-component">
        <h6 style={{ color: "#858796" }}> Earnings (Annualy)</h6>
        <h4>$20,000</h4>
      </div>
      <div style={{ borderLeftColor: "#4e73df" }} className="card-component">
        <h6 style={{ color: "#4e73df" }}>Earnings (Monthly)</h6>
        <h4>$3000</h4>
      </div>
      <div style={{ borderLeftColor: "#f6c23e" }} className="card-component">
        <h6 style={{ color: "#f6c23e" }}>Tasks</h6>
        <h4>50</h4>
      </div>
      <div style={{ borderLeftColor: "#e74a3b" }} className="card-component">
        <h6 style={{ color: "#e74a3b" }}>Pending Requests</h6>
        <h4>20</h4>
      </div>
    </div>
  );
}
