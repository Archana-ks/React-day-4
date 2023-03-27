import React from "react";

export function Border() {
  return (
    <div className="Utilities-Page">
      <div style={{ borderLeftColor: "#4e73df" }} className="border-element">
        .border-left-primary
      </div>
      <div style={{ borderLeftColor: "#858796" }} className="border-element">
        .border-left-secondary
      </div>
      <div style={{ borderLeftColor: "#1cc88a" }} className="border-element">
        .border-left-success
      </div>
      <div style={{ borderLeftColor: "#f6c23e" }} className="border-element">
        .border-left-warning
      </div>
      <div style={{ borderLeftColor: "#36b9cc" }} className="border-element">
        .border-left-info
      </div>
      <div style={{ borderLeftColor: "#e74a3b" }} className="border-element">
        .border-left-danger
      </div>
    </div>
  );
}
