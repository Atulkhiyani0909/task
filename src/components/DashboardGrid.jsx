// src/components/DashboardGrid.jsx
import React from 'react';
import ReportCard from './cards/ReportCard';
import MilestoneCard from './cards/MilestoneCard';
import EnrichmentCard from './cards/EnrichmentCard';
import CRMCard from './cards/CRMCard';

const DashboardGrid = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Top Full Width (Report Card) */}
        <div className="lg:col-span-12">
          <ReportCard />
        </div>

        {/* Bottom Left (Milestones) */}
        <div className="lg:col-span-5">
          <MilestoneCard />
        </div>

        {/* Bottom Right Column (Enrichment + CRM stacked) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <EnrichmentCard />
          <CRMCard />
        </div>
        
      </div>
    </div>
  );
};

export default DashboardGrid;