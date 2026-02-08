
import React from 'react';
import { User, Company, PlanType } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, UserPlus, Download, FileText, TrendingUp, Calendar } from 'lucide-react';
import { MOCK_COMPANIES } from '../constants';

interface ManagementViewProps {
  user: User;
}

const ManagementView: React.FC<ManagementViewProps> = ({ user }) => {
  const company = MOCK_COMPANIES[0]; // Sample for current manager
  
  const activityData = [
    { name: 'Seg', acessos: 45 },
    { name: 'Ter', acessos: 120 },
    { name: 'Qua', acessos: 89 },
    { name: 'Qui', acessos: 110 },
    { name: 'Sex', acessos: 65 },
    { name: 'Sáb', acessos: 12 },
    { name: 'Dom', acessos: 5 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Painel do Gestor</h2>
          <p className="text-slate-500 mt-1">{company.name} • Plano {company.plan}</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg">
          <Download size={20} /> Relatório Completo
        </button>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm">
          <div className="bg-blue-50 text-blue-600 p-5 rounded-2xl">
            <Users size={32} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Colaboradores Ativos</p>
            <p className="text-3xl font-bold text-slate-800">{company.activeEmployees} <span className="text-sm font-normal text-slate-400">/ {company.employeeCount}</span></p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm">
          <div className="bg-emerald-50 text-emerald-600 p-5 rounded-2xl">
            <TrendingUp size={32} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Engajamento Mensal</p>
            <p className="text-3xl font-bold text-slate-800">68%</p>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm">
          <div className="bg-purple-50 text-purple-600 p-5 rounded-2xl">
            <Calendar size={32} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Lives Participadas</p>
            <p className="text-3xl font-bold text-slate-800">14</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Engagement Chart */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-8">Acessos na Última Semana</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="acessos" fill="#10b981" radius={[8, 8, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Marketing Materials */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Kit de Divulgação Interna</h3>
          <div className="space-y-4">
            {[
              { title: 'Banners para Intranet', desc: 'Formatos horizontais e verticais.', type: 'PNG/PDF' },
              { title: 'E-mail Marketing de Boas-vindas', desc: 'Template pronto para disparar aos funcionários.', type: 'HTML' },
              { title: 'Cartaz Digital (WhatsApp)', desc: 'Para grupos de comunicação interna.', type: 'JPG' },
              { title: 'Guia de Saúde no Home Office', desc: 'Infográfico para PDF ou impressão.', type: 'PDF' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl text-slate-600">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
                <button className="text-emerald-600 hover:text-emerald-700 p-2">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementView;
