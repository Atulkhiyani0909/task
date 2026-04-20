import React from 'react';
import StatRow from '../primitives/StatRow';
import ProgressBar from '../primitives/ProgressBar';

const ReportCard = React.memo(() => {
  return (
    <div className="bg-[#E6F4FB] rounded-2xl p-8 relative overflow-hidden h-full flex flex-col md:flex-row gap-6">
      <div className="flex-1 z-10">
        <h2 className="text-2xl font-bold text-[#002D42] mb-4 leading-tight max-w-xs">
          We automatically generate reports for each of your customers
        </h2>
      </div>

      <div className="relative flex-1 min-h-[250px] z-10">
        {/* Intercom Stats Card */}
        <div className="absolute top-0 left-0 bg-white rounded-xl shadow-lg p-5 w-64 border border-gray-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center relative">
               <span className="text-white font-bold text-xl">ılı</span>
               <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full absolute -bottom-1 -right-1"></div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-none">Intercom</h3>
              <span className="text-xs text-gray-400">Joined 9 Feb 2023</span>
            </div>
          </div>
          <StatRow label="Total seats" value="50" />
          <StatRow label="Active seats" value="22" />
          <StatRow label="Active last 7 days" value="True" />
        </div>

        {/* Company Activation Card */}
        <div className="absolute top-6 left-52 bg-white rounded-xl shadow-xl p-5 w-64 border border-gray-50">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">Company activation</h3>
          <div className="text-3xl font-bold text-gray-900 mb-4">40%</div>
          <div className="space-y-1">
             <ProgressBar label="Signed up" percentage={100} />
             <ProgressBar label="Setup" percentage={80} />
             <ProgressBar label="Aha moment" percentage={60} />
             <ProgressBar label="Activated" percentage={40} />
             <ProgressBar label="Active" percentage={80} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ReportCard;