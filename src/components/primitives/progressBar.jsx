import React from 'react';

const ProgressBar = React.memo(({ label, percentage, barColor = 'bg-indigo-500' }) => {
  return (
    <div className="flex items-center gap-3 text-sm my-2">
      <span className="w-24 text-gray-600 truncate flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 block"></span>
        {label}
      </span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="w-10 text-right text-indigo-500 font-medium">{percentage}%</span>
    </div>
  );
});

export default ProgressBar;