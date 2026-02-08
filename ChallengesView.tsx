
import React from 'react';
import { User } from '../types';
import { Trophy, CheckCircle2, Circle, ArrowRight, Star } from 'lucide-react';
import { MOCK_CHALLENGES } from '../constants';

interface ChallengesViewProps {
  user: User;
}

const ChallengesView: React.FC<ChallengesViewProps> = ({ user }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Desafios e Trilhas</h2>
          <p className="text-slate-500 mt-1">Sequências estruturadas para transformar sua rotina.</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-2xl border border-amber-100 text-amber-700 text-sm font-bold">
          <Star size={18} className="fill-amber-500" />
          Nível: Postura Diamante
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {MOCK_CHALLENGES.map((challenge) => (
          <div key={challenge.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl">
                  <Trophy size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{challenge.title}</h3>
                  <p className="text-slate-500 text-sm">{challenge.days} dias de práticas guiadas</p>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed">
                {challenge.description}
              </p>

              <div className="space-y-4 mb-8">
                {[1, 2, 3, 4, 5].map((day) => (
                  <div key={day} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-100">
                    {day < 3 ? (
                      <CheckCircle2 className="text-emerald-500" size={20} />
                    ) : (
                      <Circle className="text-slate-300" size={20} />
                    )}
                    <div className="flex-1">
                      <h4 className={`text-sm font-bold ${day < 3 ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                        Dia {day}: Alinhamento Inicial
                      </h4>
                    </div>
                    {day === 3 && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-md animate-pulse">
                        HOJE
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                Continuar Desafio <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="bg-slate-100 border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center opacity-70">
          <div className="bg-white p-5 rounded-full mb-4 shadow-sm text-slate-300">
            <Star size={40} />
          </div>
          <h4 className="text-xl font-bold text-slate-500">Novos Desafios em Breve</h4>
          <p className="text-slate-400 mt-2 max-w-xs">
            Estamos preparando trilhas especiais para ergonomia no home office e redução de estresse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesView;
