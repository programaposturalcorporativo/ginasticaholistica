
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const DashboardHeader: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar aulas, trilhas ou materiais..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-slate-600 hover:text-emerald-600 transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            2
          </span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800">{user.name}</p>
            <p className="text-xs text-slate-500">{user.role}</p>
          </div>
          <img 
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=random`} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border border-slate-200"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
