import React from 'react';

export const ActionButton = ({ label, icon, gradClass }) => (
  <button className={`btn btn-gradient ${gradClass} w-100 py-4 rounded-4 shadow-sm d-flex flex-column align-items-center gap-2`}>
    {icon}
    <span className="fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>
      {label}
    </span>
  </button>
);