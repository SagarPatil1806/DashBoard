import React from 'react';

export const StatCard = ({ title, value, trend, color, icon }) => (
  <div className="card border-0 shadow-sm p-3 rounded-4 h-100 stat-card-base">
    <div className="d-flex align-items-center gap-3">
      <div className={`p-3 ${color} text-white rounded-4 shadow-sm`}>{icon}</div>
      <div>
        <p className="text-muted small fw-bold mb-0 text-uppercase tracking-wider">{title}</p>
        <h3 className="fw-bold mb-0">{value} <span className="text-success fs-6 fw-normal ms-1">{trend}</span></h3>
      </div>
    </div>
  </div>
);