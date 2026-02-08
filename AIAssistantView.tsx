
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, AlertCircle } from 'lucide-react';
import { getPosturalAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistantView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou seu assistente postural. Como posso te ajudar hoje? (Ex: "Estou com dor no pescoço", "Dicas para cadeira de escritório")' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getPosturalAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse || 'Sinto muito, não consegui processar.' }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
      <div className="mb-6 flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl">
            <Bot size={28} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Assistente Postural AI</h2>
            <p className="text-xs text-slate-500">Tira-dúvidas inteligente baseado na metodologia Renata Couto</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-xs font-semibold border border-amber-100">
          <AlertCircle size={14} />
          Não substitui consulta médica.
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-6 px-2 mb-6 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`p-2 rounded-xl flex-shrink-0 ${msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
              {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
            </div>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 border border-slate-100 shadow-sm rounded-tl-none'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-slate-200 text-slate-600 animate-pulse">
              <Bot size={18} />
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-lg flex gap-3">
        <input 
          type="text" 
          placeholder="Como aliviar a tensão nos ombros?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent border-none outline-none px-4 text-slate-700"
        />
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-2xl transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIAssistantView;
