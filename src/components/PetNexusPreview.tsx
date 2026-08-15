import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layout,
  Dog,
  ShieldCheck,
  Smartphone,
  Search,
  Plus,
  Calendar,
  MessageSquare,
  PhoneCall,
  HeartPulse,
  History,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  Building2,
  TrendingUp,
  Users,
  Scissors,
  Camera,
  Check,
  Activity,
  Clock,
  ChevronRight,
  Filter,
  Radio,
  ExternalLink,
  DollarSign,
  AlertCircle
} from 'lucide-react';

type PreviewTab = 'client-home' | 'client-pets' | 'add-pet-modal' | 'landing' | 'admin-agenda' | 'admin-operacao';

export const PetNexusPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTab>('client-home');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'macho' | 'femea'>('macho');
  const [agendaView, setAgendaView] = useState<'dia' | 'semana' | 'mes'>('dia');

  const tabs = [
    { id: 'client-home' as PreviewTab, label: 'Painel do Tutor', badge: '/client', icon: Smartphone },
    { id: 'client-pets' as PreviewTab, label: 'Meus Pets', badge: '/client/pets', icon: Dog },
    { id: 'add-pet-modal' as PreviewTab, label: 'Cadastrar Pet', badge: 'Modal Foto', icon: Plus },
    { id: 'landing' as PreviewTab, label: 'Home Principal', badge: '/', icon: Layout },
    { id: 'admin-agenda' as PreviewTab, label: 'Área de Admin', badge: '/admin/agenda', icon: Calendar },
    { id: 'admin-operacao' as PreviewTab, label: 'Operação Ao Vivo', badge: 'Realtime 🟢', icon: Activity }
  ];

  const getUrlForTab = (tab: PreviewTab) => {
    switch (tab) {
      case 'landing': return 'https://white-label-petshop.vercel.app/';
      case 'client-home': return 'https://white-label-petshop.vercel.app/client';
      case 'client-pets': return 'https://white-label-petshop.vercel.app/client/pets';
      case 'add-pet-modal': return 'https://white-label-petshop.vercel.app/client/pets?action=add-pet';
      case 'admin-agenda': return 'https://white-label-petshop.vercel.app/admin/agenda';
      case 'admin-operacao': return 'https://white-label-petshop.vercel.app/admin/operacao';
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Navigation Bar Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-zinc-950/90 p-2 rounded-2xl border border-zinc-800">
        <div className="flex flex-wrap items-center gap-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <span>{tab.label}</span>
                {tab.id === 'admin-operacao' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <a
            href="https://white-label-petshop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
          >
            <span>white-label-petshop.vercel.app</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all"
            title="Expandir prévia em tela cheia"
          >
            <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Tela Cheia</span>
          </button>
        </div>
      </div>

      {/* Browser Frame */}
      <div className="rounded-2xl bg-[#090b0e] border border-emerald-500/20 shadow-2xl overflow-hidden relative">
        
        {/* Browser Top Navigation Bar */}
        <div className="bg-[#0f1218] px-4 py-2 border-b border-zinc-800/80 flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex-1 max-w-md bg-[#07090c] border border-zinc-800 rounded-lg px-3 py-1 text-zinc-400 text-[11px] flex items-center gap-2 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="text-zinc-300 truncate">{getUrlForTab(activeTab)}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Sistema em Produção</span>
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="p-4 sm:p-6 bg-[#090b0e] min-h-[460px] text-zinc-100 font-sans">
          <AnimatePresence mode="wait">
            
            {/* SCREEN 1: LANDING PAGE */}
            {activeTab === 'landing' && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg font-display">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    PetNexus
                  </div>
                  <div className="hidden md:flex items-center gap-6 text-xs text-zinc-400 font-medium">
                    <span className="hover:text-white cursor-pointer">Recursos</span>
                    <span className="hover:text-white cursor-pointer">Serviços</span>
                    <span className="hover:text-white cursor-pointer">Planos</span>
                    <span className="hover:text-white cursor-pointer">Operação Ao Vivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span onClick={() => setActiveTab('client-home')} className="text-xs text-zinc-300 px-3 py-1.5 rounded-lg hover:bg-zinc-800 cursor-pointer">Entrar</span>
                    <span onClick={() => setActiveTab('client-home')} className="text-xs font-semibold text-zinc-950 bg-emerald-400 px-3.5 py-1.5 rounded-lg hover:bg-emerald-300 cursor-pointer">Cadastrar</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center py-4">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>SaaS White-Label Multi-Tenant em Produção</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-display">
                      O cuidado que seu pet merece, na palma da sua mão.
                    </h1>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-lg">
                      Acompanhe banhos, consultas e agendamentos em tempo real. Uma experiência exclusiva para você e seu melhor amigo com Supabase Realtime e Next.js 14.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href="https://white-label-petshop.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
                      >
                        <span>Acessar Sistema ao Vivo</span>
                        <span>→</span>
                      </a>
                      <button onClick={() => setActiveTab('admin-agenda')} className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium text-xs">
                        Explorar Área de Admin
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative">
                    <div className="rounded-2xl bg-zinc-900/90 border border-emerald-500/30 p-4 relative overflow-hidden shadow-2xl space-y-3">
                      <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col items-center justify-center p-6 text-center space-y-3 relative">
                        <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <Dog className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-bold text-white">PetShop & Estética Premium</span>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Clínica Verificada • Atendimento 24h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 2: PAINEL DO TUTOR (CLIENT DASHBOARD) */}
            {activeTab === 'client-home' && (
              <motion.div
                key="client-home"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4"
              >
                {/* Left Mini Sidebar */}
                <div className="hidden lg:block lg:col-span-3 space-y-3 p-3 rounded-xl bg-[#0c0f14] border border-zinc-800/80 text-xs">
                  <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 text-emerald-400 font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span>PetNexus Tutor</span>
                  </div>
                  <div className="space-y-1 font-medium">
                    <button onClick={() => setActiveTab('client-home')} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30 text-left">
                      <Layout className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Início</span>
                    </button>
                    <button onClick={() => setActiveTab('client-pets')} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 text-left">
                      <Dog className="w-3.5 h-3.5" />
                      <span>Meus Pets</span>
                    </button>
                    <button onClick={() => setActiveTab('add-pet-modal')} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 text-left">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Cadastrar Pet</span>
                    </button>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-9 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-zinc-800/80">
                    <div>
                      <h2 className="text-base font-bold text-white font-display">Painel do Tutor</h2>
                      <p className="text-[11px] text-zinc-400">Acompanhe o status e agendamentos dos seus pets em tempo real</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setActiveTab('add-pet-modal')} className="px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-zinc-950 text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20">
                        <Plus className="w-3.5 h-3.5" />
                        <span>Cadastrar Pet</span>
                      </button>
                    </div>
                  </div>

                  {/* Welcome Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900 border border-emerald-500/30 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-medium border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Sessão Ativa • Unidade Jardins</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Bem-vindo(a) de volta, Gabriel Suenaga! 👋
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Seu pet <strong className="text-emerald-300">Thor</strong> está cadastrado com sucesso. Acompanhe a transmissão e o status da operação ao vivo.
                    </p>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold text-xs flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Unidade</span>
                      </button>
                      <button onClick={() => setActiveTab('client-pets')} className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs flex items-center gap-1.5">
                        <Dog className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Ver Perfil dos Pets</span>
                      </button>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">MEUS PETS</span>
                      <span className="text-xs font-bold text-emerald-400">1 Cadastrado (Thor)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">PACOTE MENSAL</span>
                      <span className="text-xs font-bold text-amber-300">3 de 4 banhos</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">VACINAS</span>
                      <span className="text-xs font-bold text-emerald-400">V10 & Antirrábica</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                      <span className="text-[10px] text-zinc-500 font-mono block">REALTIME SYNC</span>
                      <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Ativo (3s)
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 3: MEUS PETS */}
            {activeTab === 'client-pets' && (
              <motion.div
                key="client-pets"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800/80">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      readOnly
                      value="Buscar pets, raça ou status..."
                      className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-[#0c0f14] border border-zinc-800 text-xs text-zinc-400"
                    />
                  </div>
                  <button
                    onClick={() => setActiveTab('add-pet-modal')}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar Novo Pet</span>
                  </button>
                </div>

                <div className="space-y-1">
                  <h2 className="text-base font-bold text-white font-display">Meus Pets</h2>
                  <p className="text-xs text-zinc-400">Gerencie e acompanhe a saúde e os serviços dos seus pets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pet Card: Kira */}
                  <div className="p-4 rounded-2xl bg-[#0c0f14] border border-emerald-500/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg">
                        🐶
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-white capitalize">Thor</h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-emerald-300 font-bold">
                            EM CASA
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400">Cachorro • Golden Retriever</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 font-mono block">SEXO / CASTRADO</span>
                        <span className="font-semibold text-zinc-200">Macho / Sim</span>
                      </div>
                      <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 font-mono block">PESO</span>
                        <span className="font-bold text-emerald-300">28.5 kg</span>
                      </div>
                      <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 font-mono block">PELAGEM / COR</span>
                        <span className="font-semibold text-zinc-200">Longa / Dourado</span>
                      </div>
                      <div className="p-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
                        <span className="text-[10px] text-zinc-500 font-mono block">IDADE</span>
                        <span className="font-semibold text-zinc-200">2 anos e 3 meses</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-medium flex items-center justify-center gap-1.5">
                        <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Saúde & Vacinas</span>
                      </button>
                      <button className="py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 font-medium flex items-center justify-center gap-1.5">
                        <History className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Histórico</span>
                      </button>
                    </div>
                  </div>

                  {/* Add Pet Trigger Box */}
                  <button
                    onClick={() => setActiveTab('add-pet-modal')}
                    className="p-6 rounded-2xl bg-[#0c0f14]/50 hover:bg-[#0c0f14] border border-dashed border-zinc-800 hover:border-emerald-500/50 flex flex-col items-center justify-center text-center space-y-2 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 group-hover:scale-110 flex items-center justify-center text-emerald-400 transition-transform">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-emerald-300">Cadastrar Outro Pet</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">
                        Modal de cadastro com upload de foto e validação Zod
                      </p>
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* SCREEN 4: ADICIONAR NOVO PET MODAL */}
            {activeTab === 'add-pet-modal' && (
              <motion.div
                key="add-pet-modal"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative py-2 flex items-center justify-center"
              >
                <div className="w-full max-w-lg rounded-2xl bg-[#141a23] border border-emerald-500/30 p-5 sm:p-6 shadow-2xl space-y-5">
                  
                  {/* Modal Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <Dog className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white font-display">Adicionar Novo Pet</h3>
                        <p className="text-[11px] text-zinc-400">Preencha os dados do seu companheiro (Validação Zod)</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTab('client-pets')}
                      className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                      title="Fechar formulário"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Avatar Upload Placeholder */}
                  <div className="flex flex-col items-center justify-center space-y-1.5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-zinc-900 border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500">
                        <Camera className="w-6 h-6" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-400 text-zinc-950 flex items-center justify-center font-bold">
                        <Plus className="w-3 h-3" />
                      </div>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-medium">Foto do Pet</span>
                  </div>

                  {/* Form Inputs */}
                  <div className="space-y-3 text-xs">
                    
                    {/* Nome do Pet */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-zinc-300">
                        Nome do Pet <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        value="Thor"
                        className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-100 font-medium focus:outline-none focus:border-emerald-500/50"
                      />
                    </div>

                    {/* Espécie e Raça */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Espécie</label>
                        <input
                          type="text"
                          readOnly
                          value="Cachorro"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 font-medium focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Raça</label>
                        <input
                          type="text"
                          readOnly
                          value="Golden Retriever"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 font-medium focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Sexo Toggle */}
                    <div className="space-y-1">
                      <div className="grid grid-cols-2 p-1 rounded-xl bg-[#0c1016] border border-zinc-800">
                        <button
                          type="button"
                          onClick={() => setSelectedGender('macho')}
                          className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedGender === 'macho'
                              ? 'bg-emerald-400 text-zinc-950 shadow-md'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Macho
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedGender('femea')}
                          className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                            selectedGender === 'femea'
                              ? 'bg-emerald-400 text-zinc-950 shadow-md'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Fêmea
                        </button>
                      </div>
                    </div>

                    {/* Idade e Peso */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Idade (ex: 2 Anos)</label>
                        <input
                          type="text"
                          readOnly
                          value="2 Anos e 3 Meses"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Peso (kg)</label>
                        <input
                          type="text"
                          readOnly
                          value="28.5"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Pelagem e Cor */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Pelagem</label>
                        <input
                          type="text"
                          readOnly
                          value="Longa / Dourada"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[11px] font-semibold text-zinc-300">Cor</label>
                        <input
                          type="text"
                          readOnly
                          value="Dourado Claro"
                          className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-200 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Observações de Saúde */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-semibold text-zinc-300">Observações de Saúde</label>
                      <textarea
                        readOnly
                        rows={2}
                        value="Pet dócil, vacinação em dia, sem alergias conhecidas."
                        className="w-full px-3 py-2 rounded-xl bg-[#0c1016] border border-zinc-800 text-zinc-300 text-xs focus:outline-none resize-none"
                      />
                    </div>

                  </div>

                  {/* Modal Footer Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab('client-pets')}
                      className="py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => setActiveTab('client-pets')}
                      className="py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20 transition-all"
                    >
                      <Check className="w-4 h-4" />
                      <span>Salvar Pet</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            )}

            {/* SCREEN 5: ÁREA DE ADMIN (/admin/agenda) */}
            {activeTab === 'admin-agenda' && (
              <motion.div
                key="admin-agenda"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Admin Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-display">Agenda Visual — PetNexus Admin</h3>
                      <p className="text-[11px] text-zinc-400">Gestão de horários, profissionais e agendamentos recorrentes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
                      {(['dia', 'semana', 'mes'] as const).map((view) => (
                        <button
                          key={view}
                          onClick={() => setAgendaView(view)}
                          className={`px-2.5 py-1 rounded-lg capitalize font-medium transition-all ${
                            agendaView === view
                              ? 'bg-indigo-600 text-white shadow-md'
                              : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          {view}
                        </button>
                      ))}
                    </div>
                    <button className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-indigo-600/30">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Novo Agendamento</span>
                    </button>
                  </div>
                </div>

                {/* Filter and Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">AGENDADOS HOJE</span>
                    <span className="text-sm font-bold text-white">18 Atendimentos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">EM ANDAMENTO</span>
                    <span className="text-sm font-bold text-emerald-400">4 na Operação</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">PROFISSIONAIS</span>
                    <span className="text-sm font-bold text-indigo-300">5 Groomers / 2 Vets</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 font-mono block">FATURAMENTO PREVISTO</span>
                    <span className="text-sm font-bold text-emerald-400">R$ 2.340,00</span>
                  </div>
                </div>

                {/* Timeline Grid */}
                <div className="space-y-2 pt-1">
                  <div className="text-[11px] font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Grade de Horários • Hoje (Sincronizado via Supabase RLS)
                  </div>

                  <div className="space-y-2">
                    {/* Item 1 */}
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-indigo-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-indigo-950/80 text-indigo-300 font-mono font-bold border border-indigo-800/40">
                          09:00 - 10:30
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Thor (Golden Retriever)</span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                              Banho & Tosa Completa
                            </span>
                          </div>
                          <p className="text-zinc-400 text-[11px]">Tutor: Gabriel Suenaga • Groomer: Rafaela</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold">R$ 140,00</span>
                        <button onClick={() => setActiveTab('admin-operacao')} className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px]">
                          Ver na Operação →
                        </button>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 font-mono font-bold border border-zinc-800">
                          10:30 - 11:15
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Luna (Shih Tzu)</span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-purple-950 text-purple-300 border border-purple-800/40">
                              Consulta Dermatológica
                            </span>
                          </div>
                          <p className="text-zinc-400 text-[11px]">Tutor: Mariana Costa • Vet: Dra. Camila</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold">R$ 180,00</span>
                        <span className="px-2 py-1 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-mono">Aguardando</span>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3 rounded-xl bg-[#0c0f14] border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 font-mono font-bold border border-zinc-800">
                          11:30 - 12:15
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Bob (Bulldog Francês)</span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-amber-950 text-amber-300 border border-amber-800/40">
                              Banho Hidratação & Ozônio
                            </span>
                          </div>
                          <p className="text-zinc-400 text-[11px]">Tutor: Carlos Silva • Groomer: Lucas</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-emerald-400 font-bold">R$ 95,00</span>
                        <span className="px-2 py-1 rounded-lg bg-zinc-900 text-zinc-400 text-[10px] font-mono">Confirmado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCREEN 6: OPERAÇÃO AO VIVO (/admin/operacao) */}
            {activeTab === 'admin-operacao' && (
              <motion.div
                key="admin-operacao"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Realtime Live Header */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-900 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h3 className="text-xs font-bold text-white font-mono flex items-center gap-2">
                        <span>SUPABASE REALTIME ENGINE</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] border border-emerald-500/30">
                          LIVE SYNC ACTIVE
                        </span>
                      </h3>
                      <p className="text-[11px] text-zinc-400">
                        Status dos pets em atendimento sincronizado instantaneamente com o Painel do Tutor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                      Tenant: <strong>unidade-01</strong>
                    </span>
                  </div>
                </div>

                {/* Kanban Status Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Column 1: Aguardando / Recepção */}
                  <div className="p-3 rounded-2xl bg-[#0c0f14] border border-zinc-800 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Aguardando (1)</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">Recepção</span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Luna</span>
                        <span className="text-[10px] text-zinc-400 font-mono">10:15</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">Shih Tzu • Consulta Vet</p>
                      <div className="pt-1 border-t border-zinc-800 flex items-center justify-between text-[10px]">
                        <span className="text-zinc-500">Dra. Camila</span>
                        <span className="text-amber-400 font-medium">Check-in OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Em Banho & Tosa */}
                  <div className="p-3 rounded-2xl bg-[#0c0f14] border border-indigo-500/30 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300">
                        <Scissors className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Em Atendimento (2)</span>
                      </div>
                      <span className="text-[10px] font-mono text-indigo-400">Banho / Secagem</span>
                    </div>

                    {/* Thor in Progress Card */}
                    <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/40 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white flex items-center gap-1">
                          Thor 🐕
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Secagem 75%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full w-3/4 animate-pulse" />
                      </div>
                      <p className="text-[11px] text-zinc-300">Golden Retriever • Banho & Tosa Higiênica</p>
                      <div className="pt-1 border-t border-indigo-900/50 flex items-center justify-between text-[10px]">
                        <span className="text-zinc-400">Groomer: Rafaela</span>
                        <span className="text-emerald-400 font-mono">Realtime push</span>
                      </div>
                    </div>

                    {/* Bob Card */}
                    <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Bob</span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-zinc-800 text-zinc-300">
                          Hidratação 40%
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400">Bulldog • Groomer: Lucas</p>
                    </div>
                  </div>

                  {/* Column 3: Pronto / Notificado */}
                  <div className="p-3 rounded-2xl bg-[#0c0f14] border border-emerald-500/30 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pronto / Notificado (1)</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">WhatsApp OK</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">Mel</span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Finalizado
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-300">Poodle • Tosa Completa & Laço</p>
                      <div className="pt-1 border-t border-emerald-900/50 flex items-center justify-between text-[10px]">
                        <span className="text-emerald-400 font-mono">WhatsApp enviado</span>
                        <span className="text-zinc-400 font-bold">Aguardando Tutor</span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="bg-[#0c0f14] px-4 py-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>● Sistema em Produção · Vercel · Supabase Realtime</span>
          </div>
          <a
            href="https://white-label-petshop.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold transition-colors"
          >
            <span>Ver Sistema ao Vivo</span>
            <span>→</span>
          </a>
        </div>

      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/95 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl rounded-3xl bg-[#090b0e] border border-emerald-500/30 shadow-2xl p-4 sm:p-6 space-y-4 max-h-[95vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/30">
                    PetNexus SaaS — Prévia em Produção (Vercel + Supabase)
                  </span>
                </div>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#090b0e] border border-zinc-800">
                <PetNexusPreview />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
