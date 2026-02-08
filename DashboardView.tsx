
import React from 'react';
import { User, UserRole } from '../types';
import { PlayCircle, Clock, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { MOCK_LESSONS } from '../constants';

interface DashboardViewProps {
  user: User;
}

const DashboardView: React.FC<DashboardViewProps> = ({ user }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-10 text-white relative overflow-hidden shadow-xl shadow-emerald-100">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">{getGreeting()}, {user.name}! 👋</h2>
          <p className="text-emerald-50 text-lg mb-8 opacity-90">
            {user.role === UserRole.EMPLOYEE 
              ? "Pronto para sua dose diária de bem-estar? Sua coluna agradece por esse momento."
              : "Veja como anda o engajamento e a saúde postural das suas equipes hoje."}
          </p>
          {user.role === UserRole.EMPLOYEE && (
            <button className="bg-white text-emerald-700 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all shadow-lg">
              <PlayCircle size={20} />
              Continuar última aula
            </button>
          )}
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 hidden lg:block">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 C 50 25 50 75 100 100 V 0 Z" fill="white" />
           </svg>
        </div>
      </section>

      {/* Stats Quick View (Context Dependent) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Aulas Concluídas', value: '12', icon: PlayCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Tempo Praticado', value: '4.5h', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          { label: 'Próxima Live', value: 'Amanhã, 09h', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Pontos Saúde', value: '850', icon: Trophy, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recommended Lessons */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Recomendado para você</h3>
            <button className="text-emerald-600 font-semibold text-sm flex items-center gap-1 hover:underline">
              Ver biblioteca <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {MOCK_LESSONS.slice(1, 3).map((lesson) => (
              <div key={lesson.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <PlayCircle className="text-white w-12 h-12" />
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md">
                    {lesson.duration}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mb-2">{lesson.category}</p>
                  <h4 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1">{lesson.title}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Agenda Snippet */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-800">Próximas Vivas</h3>
            <button className="text-emerald-600 font-semibold text-sm hover:underline">Agenda completa</button>
          </div>
          <div className="space-y-4">
            {[1, 2].map((_, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 flex gap-4">
                <div className="bg-emerald-50 text-emerald-700 min-w-[60px] h-[60px] flex flex-col items-center justify-center rounded-2xl font-bold">
                  <span className="text-xs uppercase">Mai</span>
                  <span className="text-xl leading-none">2{8+i}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">Pausa Ativa em Grupo</h4>
                  <p className="text-slate-500 text-xs mb-3 flex items-center gap-1">
                    <Clock size={12} /> 09:00 - 09:30
                  </p>
                  <button className="text-[10px] bg-emerald-600 text-white px-3 py-1.5 rounded-full font-bold hover:bg-emerald-700 transition-colors">
                    Participar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
