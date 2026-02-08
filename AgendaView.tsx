
import React from 'react';
import { User, LiveClass } from '../types';
import { Calendar as CalendarIcon, Clock, Video, Info } from 'lucide-react';
import { MOCK_LIVE_CLASSES } from '../constants';

interface AgendaViewProps {
  user: User;
}

const AgendaView: React.FC<AgendaViewProps> = ({ user }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Agenda Ao Vivo</h2>
          <p className="text-slate-500 mt-1">Conecte-se em tempo real para práticas guiadas.</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200 shadow-sm text-sm font-bold text-slate-600">
          <CalendarIcon size={18} className="text-emerald-600" />
          Maio, 2024
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {MOCK_LIVE_CLASSES.map((lc) => (
            <div key={lc.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-8">
              <div className="md:w-32 flex flex-col items-center justify-center bg-slate-50 rounded-2xl border border-slate-100 p-4">
                <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">QUINTA</span>
                <span className="text-4xl font-black text-emerald-600">28</span>
                <span className="text-xs font-bold text-slate-500 uppercase mt-1">MAIO</span>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{lc.title}</h3>
                    <p className="text-slate-500 flex items-center gap-2 mt-1">
                      <span className="flex items-center gap-1 font-semibold text-emerald-600">
                        <Clock size={16} /> {lc.time}
                      </span>
                      • instrutora: {lc.instructor}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-full">CONFIRMADA</span>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  Prática de Ginástica Holística focada em consciência corporal e alinhamento da coluna. 
                  Prepare um espaço confortável e uma cadeira firme.
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href={lc.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100"
                  >
                    <Video size={20} /> Acessar Aula
                  </a>
                  <button className="border border-slate-200 text-slate-600 px-6 py-3 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                    Adicionar ao Google Agenda
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl text-white shadow-xl">
            <h4 className="font-bold text-lg mb-4">Dicas para as Lives</h4>
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex gap-3">
                <div className="bg-white/10 p-2 rounded-lg h-fit"><Info size={16} /></div>
                Chegue 5 minutos antes para testar seu áudio e vídeo.
              </li>
              <li className="flex gap-3">
                <div className="bg-white/10 p-2 rounded-lg h-fit"><Info size={16} /></div>
                Use roupas confortáveis que permitam movimento.
              </li>
              <li className="flex gap-3">
                <div className="bg-white/10 p-2 rounded-lg h-fit"><Info size={16} /></div>
                Tire as dúvidas pelo chat ao final da sessão.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaView;
