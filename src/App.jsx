import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { StatCard } from './components/StatCard';
import { ActionButton } from './components/ActionButton';
import { Users, Calendar, Layout, QrCode, Send, PieChart, FileText } from 'lucide-react';

export default function App() {
  return (
    <div className="min-vh-100">
      <header className="navbar-fixed-header">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <main className="container main-content">
        <HeroBanner />

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <StatCard title="Total Customers" value="7" trend="+5%" color="bg-primary" icon={<Users />} />
          </div>
          <div className="col-md-4">
            <StatCard title="Content Creators" value="2" trend="+8%" color="bg-danger" icon={<Users />} />
          </div>
          <div className="col-md-4">
            <StatCard title="Content Items" value="60" trend="+12%" color="bg-success" icon={<Calendar />} />
          </div>
        </div>

        <h5 className="fw-bold mb-4">Quick Actions</h5>

        <div className="quick-actions-grid">
          <ActionButton label="Customers" gradClass="grad-blue" icon={<Users size={20} />} />
          <ActionButton label="Creators" gradClass="grad-red" icon={<Users size={20} />} />
          <ActionButton label="Calendar" gradClass="grad-green" icon={<Calendar size={20} />} />
          <ActionButton label="Portfolio" gradClass="grad-purple" icon={<Layout size={20} />} />
          <ActionButton label="Scheduled" gradClass="grad-orange" icon={<FileText size={20} />} />
          <ActionButton label="QR Codes" gradClass="grad-cyan" icon={<QrCode size={20} />} />
          <ActionButton label="Publish" gradClass="grad-green" icon={<Send size={20} />} />
          <ActionButton label="Analytics" gradClass="grad-dark" icon={<PieChart size={20} />} />
        </div>
      </main>
    </div>
  );
}