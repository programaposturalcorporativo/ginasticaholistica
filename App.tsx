
import React, { useState, useEffect } from 'react';
import { User, UserRole, PlanType } from './types';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardView from './views/DashboardView';
import LessonsView from './views/LessonsView';
import AgendaView from './views/AgendaView';
import ChallengesView from './views/ChallengesView';
import AdminView from './views/AdminView';
import ManagementView from './views/ManagementView';
import LoginView from './views/LoginView';
import AIAssistantView from './views/AIAssistantView';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <LoginView onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardView user={currentUser} />;
      case 'lessons': return <LessonsView user={currentUser} />;
      case 'agenda': return <AgendaView user={currentUser} />;
      case 'challenges': return <ChallengesView user={currentUser} />;
      case 'ai-assistant': return <AIAssistantView />;
      case 'management': return <ManagementView user={currentUser} />;
      case 'admin': return <AdminView user={currentUser} />;
      default: return <DashboardView user={currentUser} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        role={currentUser.role} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout}
      />
      <div className="flex-1 flex flex-col">
        <DashboardHeader user={currentUser} />
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
