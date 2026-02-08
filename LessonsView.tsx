
import React, { useState } from 'react';
import { User, Lesson } from '../types';
import { Search, Filter, PlayCircle, Clock, Lock } from 'lucide-react';
import { MOCK_LESSONS } from '../constants';

interface LessonsViewProps {
  user: User;
}

const LessonsView: React.FC<LessonsViewProps> = ({ user }) => {
  const [filter, setFilter] = useState('ALL');
  
  const categories = [
    { id: 'ALL', label: 'Tudo' },
    { id: 'WELCOME', label: 'Boas-vindas' },
    { id: 'PAUSE', label: 'Pausas Posturais' },
    { id: 'SERIES', label: 'Séries Completas' },
    { id: 'BREATH', label: 'Respiração' },
  ];

  const filteredLessons = filter === 'ALL' 
    ? MOCK_LESSONS 
    : MOCK_LESSONS.filter(l => l.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Biblioteca de Aulas</h2>
          <p className="text-slate-500 mt-1">Explore conteúdos para diferentes momentos do seu dia.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2 rounded-2xl border border-slate-200 flex items-center gap-2">
            <Filter size={18} className="text-slate-400" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent text-sm font-semibold outline-none text-slate-700"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-48">
              <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                <PlayCircle className="text-white w-14 h-14" />
              </div>
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {lesson.category}
                </span>
                {lesson.isPremium && (
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock size={10} /> Premium
                  </span>
                )}
              </div>
              <span className="absolute bottom-3 right-3 bg-slate-900/70 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 backdrop-blur-sm">
                <Clock size={12} /> {lesson.duration}
              </span>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-emerald-600 transition-colors">{lesson.title}</h4>
              <p className="text-slate-500 text-xs line-clamp-3 leading-relaxed">
                {lesson.description}
              </p>
              <button className="mt-6 w-full py-3 rounded-2xl border-2 border-emerald-600 text-emerald-600 text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all uppercase tracking-widest">
                Iniciar Prática
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsView;
