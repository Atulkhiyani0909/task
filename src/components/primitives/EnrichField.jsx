import React from 'react';

const EnrichField = React.memo(({ icon, label, value, isHighlight }) => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <div className="flex items-center gap-2 text-gray-500">
        <span className="text-gray-400">{icon || '◈'}</span>
        <span>{label}</span>
      </div>
      <div className={`font-medium ${isHighlight ? 'text-green-500' : 'text-gray-800'}`}>
        {value}
      </div>
    </div>
  );
});

export default EnrichField;