import React from 'react';

const StatRow = React.memo(({ icon, label, value }) => {
  return (
    <div className="flex justify-between items-center text-sm py-1.5">
      <div className="flex items-center gap-2 text-gray-600">
        <span className="text-green-500">{icon || '⚡'}</span>
        <span>{label}</span>
      </div>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
});

export default StatRow;