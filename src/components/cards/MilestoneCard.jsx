import React from 'react';

const MilestoneCard = React.memo(() => {
  return (
    <div className="bg-[#F6E8F9] rounded-2xl p-8 h-full">
      <h2 className="text-xl font-bold text-purple-900 mb-2">Celebrate milestones</h2>
      <p className="text-purple-800 text-sm mb-6 max-w-sm">
        Instant alerts and weekly digests to keep your team aligned and celebrate wins
      </p>

      <div className="bg-white rounded-xl shadow-sm p-5 border border-purple-50">
        <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
          <span className="w-5 h-5 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center">J</span>
          <span className="font-semibold text-gray-700">June</span>
          <span className="border px-1 rounded text-[10px]">APP</span>
          <span>10:36 AM</span>
        </div>

        <div className="mb-4">
          <div className="font-bold text-gray-900 flex items-center gap-2">
            <span>🎉</span> Qualified signup
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
             <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="avatar" className="w-5 h-5 rounded-full" />
             <span className="font-medium text-gray-800">Eoghan McCabe</span> 
             <span className="text-indigo-500">eoghan@intercom.io</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-l-2 border-gray-200 pl-4">
          <div>
            <div className="text-xs text-gray-900 font-bold">Company name:</div>
            <div className="text-sm text-gray-600">Intercom</div>
          </div>
          <div>
            <div className="text-xs text-gray-900 font-bold">Location:</div>
            <div className="text-sm text-gray-600">Dublin, Ireland</div>
          </div>
          <div>
            <div className="text-xs text-gray-900 font-bold">Role:</div>
            <div className="text-sm text-gray-600">CTO & Co-Founder</div>
          </div>
          <div>
            <div className="text-xs text-gray-900 font-bold">Company website:</div>
            <div className="text-sm text-indigo-500">Intercom.io</div>
          </div>
          <div>
            <div className="text-xs text-gray-900 font-bold">Company size:</div>
            <div className="text-sm text-gray-600">800</div>
          </div>
          <div>
            <div className="text-xs text-gray-900 font-bold">LinkedIn:</div>
            <div className="text-sm text-indigo-500">View profile</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MilestoneCard;