import React from 'react';
import CRMRow from '../primitives/CRMRow';
import LightningTag from '../primitives/LightiningTag';

const CRMCard = React.memo(() => {
  return (
    <div className="bg-[#E2F7D8] rounded-2xl p-8 h-full relative">
      <h2 className="text-xl font-bold text-green-900 mb-2">Integrated with your CRM</h2>
      <p className="text-green-800 text-sm mb-6 max-w-xs">
        Connect June to your CRM and sync product usage data with your CS and sales teams
      </p>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-green-50 max-w-sm ml-auto relative z-10 mt-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-900 text-sm">CRM</h3>
          <div className="flex gap-2">
            <span className="text-xl">⬡</span> {/* Hubspot placeholder */}
            <span className="text-xl text-orange-500">◎</span> {/* Salesforce placeholder */}
          </div>
        </div>
        
        <div className="grid grid-cols-2 text-xs font-semibold text-gray-500 mb-2">
          <div>Company</div>
          <div><span className="mr-1">📊</span> Active seats</div>
        </div>
        
        <CRMRow logoInitials="ılı" logoBg="bg-gray-900" name="Intercom" seats="22" delta={3} />
        <CRMRow logoInitials="A" logoBg="bg-pink-300" name="Amie" seats="20" delta={-2} />
      </div>

      {/* Decorative scribbles / tags from image */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
         <div className="text-sm font-handwriting transform -rotate-6 mb-2">Also done for you</div>
         <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2C10 15 25 20 40 10C45 5 55 18 58 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M50 15L58 15L55 8" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
         </svg>
      </div>
      
      <div className="absolute top-1/2 left-8 transform -translate-y-4">
         <LightningTag text="Last seen today" />
      </div>
      <div className="absolute bottom-8 left-32">
         <LightningTag text="Activated true" />
      </div>
    </div>
  );
});

export default CRMCard;