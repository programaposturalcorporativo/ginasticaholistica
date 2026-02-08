
import React from 'react';
import { User, UserRole } from '../types';
import { HeartPulse, ShieldCheck, User as UserIcon, Building2 } from 'lucide-react';

interface LoginViewProps {
  onLogin: (user: User) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const demoProfiles = [
    {
      name: 'Renata Couto',
      role: UserRole.ADMIN,
      email: 'contato@renatacouto.com',
      icon: ShieldCheck,
      color: 'bg-emerald-600',
      desc: 'Acesso total ao sistema e gestão de empresas.'
    },
    {
      name: 'Gestor RH - TechInova',
      role: UserRole.MANAGER,
      email: 'rh@techinova.com',
      companyId: 'comp1',
      icon: Building2,
      color: 'bg-blue-600',
      desc: 'Gestão de colaboradores e relatórios da empresa.'
    },
    {
      name: 'João Silva',
      role: UserRole.EMPLOYEE,
      email: 'joao@techinova.com',
      companyId: 'comp1',
      icon: UserIcon,
      color: 'bg-indigo-600',
      desc: 'Acesso às aulas, desafios e agenda.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-600 p-4 rounded-2xl mb-4 shadow-xl shadow-emerald-200">
            <HeartPulse className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Programa Postural Corporativo</h1>
          <p className="text-slate-500 mt-2">Escolha um perfil para testar a experiência da plataforma</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demoProfiles.map((profile) => (
            <button
              key={profile.role}
              onClick={() => onLogin({
                id: Math.random().toString(),
                name: profile.name,
                email: profile.email,
                role: profile.role,
                companyId: profile.companyId
              })}
              className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-emerald-500 hover:shadow-2xl transition-all text-left group"
            >
              <div className={`${profile.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <profile.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{profile.name}</h3>
              <p className="text-sm font-medium text-emerald-600 mb-4">{profile.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{profile.desc}</p>
              
              <div className="mt-8 flex items-center text-emerald-600 font-semibold text-sm">
                Entrar agora
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-400 text-sm">
          Plataforma Renata Couto © 2024 - Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default LoginView;
