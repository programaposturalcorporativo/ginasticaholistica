
import React from 'react';
import { 
  Home, 
  Video, 
  Calendar, 
  Trophy, 
  Users, 
  Settings, 
  BarChart3, 
  LogOut,
  HeartPulse,
  MessageSquare
} from 'lucide-react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE] },
    { id: 'lessons', label: 'Biblioteca', icon: Video, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE] },
    { id: 'agenda', label: 'Agenda Ao Vivo', icon: Calendar, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE] },
    { id: 'challenges', label: 'Desafios', icon: Trophy, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE] },
    { id: 'ai-assistant', label: 'Assistente AI', icon: MessageSquare, roles: [UserRole.EMPLOYEE] },
    { id: 'management', label: 'Gestão RH', icon: Users, roles: [UserRole.MANAGER] },
    { id: 'admin', label: 'Administração', icon: BarChart3, roles: [UserRole.ADMIN] },
    { id: 'settings', label: 'Configurações', icon: Settings, roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EMPLOYEE] },
  ];

  return (
    <aside className="w-64 bg-white h-screen border-r border-slate-200 flex flex-col sticky top-0">
      <div className="p-6 border-b border-slate-100 flex items-center gap-2">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <HeartPulse className="text-white w-6 h-6" />
        </div>
        <span className="font-bold text-slate-800 leading-tight">
          Renata Couto<br/>
          <span className="text-xs font-normal text-slate-500 uppercase tracking-wider">Programa Postural</span>
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems
          .filter(item => item.roles.includes(role))
          .map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          <span>Sair da Conta</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
