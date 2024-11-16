// src/app/dashboard/layout.tsx
import React from 'react';
import DashNav from '../components/dashNav'; // Adjust the relative path as needed

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashNav /> {/* Navigation Component */}
      <main>{children}</main> {/* Page-specific content */}
    </div>
  );
};

export default DashboardLayout;
