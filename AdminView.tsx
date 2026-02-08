
import React from 'react';
import { User, Company, PlanType } from '../types';
import { Building2, Plus, Search, ExternalLink, MoreVertical, Layers, CheckCircle } from 'lucide-react';
import { MOCK_COMPANIES } from '../constants';

interface AdminViewProps {
  user: User;
}

const AdminView: React.FC<AdminViewProps> = ({ user }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Administração do Programa</h2>
          <p className="text-slate-500 mt-1">Gerencie suas empresas parceiras e métricas globais.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg">
          <Plus size={20} /> Nova Empresa
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Empresas', value: '12', color: 'bg-emerald-600' },
          { label: 'Usuários Totais', value: '2.450', color: 'bg-blue-600' },
          { label: 'Lives do Mês', value: '48', color: 'bg-orange-500' },
          { label: 'Faturamento Est.', value: 'R$ 14k', color: 'bg-purple-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <Building2 size={20} className="text-emerald-600" />
            Empresas Contratantes
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Pesquisar empresa..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Empresa</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Plano</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Ativos / Total</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Desde</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {MOCK_COMPANIES.map((company) => (
                <tr key={company.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 font-bold uppercase">
                        {company.name.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-800">{company.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      company.plan === PlanType.PLUS ? 'bg-emerald-100 text-emerald-700' : 
                      company.plan === PlanType.PREMIUM ? 'bg-purple-100 text-purple-700' : 
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {company.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{company.activeEmployees}</span>
                      <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1">
                        <div 
                          className="h-full bg-emerald-500 rounded-full" 
                          style={{width: `${(company.activeEmployees/company.employeeCount)*100}%`}}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(company.joinDate).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                      <CheckCircle size={14} /> Ativo
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
