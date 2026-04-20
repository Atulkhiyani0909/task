import React from 'react';
import EnrichField from '../primitives/EnrichField';

const EnrichmentCard = React.memo(() => {
  return (
    <div className="bg-[#FFF0DF] rounded-2xl p-9 h-full relative mt-6">
      <h2 className="text-xl font-bold text-amber-900 mb-2">Automatic enrichment</h2>
      <p className="text-amber-800 text-sm mb-6 max-w-sm">
        Automatically enrich your customers profiles and their users powered by GPT
      </p>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-amber-50">
        <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm mb-4">
          <span>✨</span> Enriched with AI
        </div>
        
        <div className="grid grid-cols-2 gap-y-5 gap-x-4">
          <EnrichField icon="🌐" label="Website" value="intercom.io" />
          <EnrichField icon="📍" label="Location" value="Dublin, Ireland" />
          <EnrichField icon="👥" label="Employees" value="800" />
          <EnrichField icon="🐦" label="Twitter" value="@intercom" />
          <EnrichField icon="💰" label="Funding" value="$241M" />
          <EnrichField icon="✓" label="Qualified" value="true" isHighlight={true} />
        </div>
      </div>
      
      {/* Decorative floating element */}
      <div className="absolute top-1/2 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
         <span className="text-2xl text-gray-800 font-bold">ılı</span>
      </div>
    </div>
  );
});

export default EnrichmentCard;