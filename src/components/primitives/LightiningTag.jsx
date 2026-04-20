import React from 'react';

const LightningTag = React.memo(({ text, variant = 'green' }) => {
  const colorStyles = variant === 'green' 
    ? 'bg-green-100 text-green-700' 
    : 'bg-indigo-100 text-indigo-700';

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${colorStyles}`}>
      ⚡ <span>{text}</span>
    </div>
  );
});

export default LightningTag;