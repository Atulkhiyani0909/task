import React from 'react';

const CRMRow = React.memo(({ logoInitials, logoBg, name, seats, delta }) => {
  const isPositive = delta > 0;
  return (
    <div className="flex justify-between items-center py-2 border-t border-gray-50 text-sm">
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded flex items-center justify-center text-xs text-white ${logoBg}`}>
          {logoInitials}
        </div>
        <span className="font-medium text-gray-700">{name}</span>
      </div>
      <div className="text-gray-600">
        {seats}{' '}
        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
          ({isPositive ? '+' : ''}{delta})
        </span>
      </div>
    </div>
  );
});

export default CRMRow;