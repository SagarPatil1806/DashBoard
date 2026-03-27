import React from 'react';
import { Bell, Search } from 'lucide-react';

export const Navbar = () => (
  <div className="d-flex justify-content-between align-items-center">
    <div>
      <h4 className="fw-bold mb-0 text-dark">Dashboard</h4>
      <p className="text-muted small mb-0">Manage your content strategy</p>
    </div>

    <div className="d-flex align-items-center gap-3">
      <div className="d-none d-lg-block me-2">
        <input type="text" className="form-control form-control-sm rounded-pill px-3 navbar-search" placeholder="Search..." />
      </div>

      <div className="position-relative me-2 nav-icon-wrapper">
        <Bell size={22} color="#6c757d" />
        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle pulse-animation"></span>
      </div>

      <div className="dropdown">
        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm dropdown-toggle custom-profile-btn" data-bs-toggle="dropdown">
          AS
        </div>
        <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-3 p-2 rounded-4">
          <li><a className="dropdown-item rounded-3 py-2" href="#">My Profile</a></li>
          <li><a className="dropdown-item rounded-3 py-2" href="#">Settings</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item text-danger rounded-3 py-2" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
);