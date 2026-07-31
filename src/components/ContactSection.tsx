import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRole, setFormRole] = useState('Recrutador / Vagas');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Anti-Spam Math Captcha State
  const [num1] = useState(() => Math.floor(Math.random() * 8) + 2); // 2 to 9
  const [num2] = useState(() => Math.floor(Math.random() * 8) + 2); // 2 to 9
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isHumanChecked, setIsHumanChecked] = useState(false);
  const [captchaError, setCaptchaError] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError('');

    if (!formName || !formEmail || !formMessage) return;

    // Verify Anti-Spam Captcha
    if (!isHumanChecked) {
      setCaptchaError('Por favor, marque a caixa "Não sou um robô" para continuar.');
      return;
    }

    if (parseInt(userCaptcha.trim(), 10) !== num1 + num2) {
      setCaptchaError(`Validação incorreta! Quanto é ${num1} + ${num2}? Digite o resultado correto.`);
      return;
    }

    // Build mailto link directing to gabriel.hneus@gmail.com
    const mailtoSubject = encodeURIComponent(`Contato via Portfólio [${formRole}] - ${formName}`);
    const mailtoBody = encodeURIComponent(
      `Nome: ${formName}\nE-mail: ${formEmail}\nTipo de Contato: ${formRole}\n\nMensagem:\n${formMessage}\n\n---\nVerificado Anti-Spam (Humano OK)`
    );
    
    // Trigger Mailto Client
    window.open(`mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`);

    setFormSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 bg-zinc-950/90 border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Contato Direto</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Vamos Conversar?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Disponível para contratação imediata (Júnior/Pleno), SaaS e automação B2B.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contacts & WhatsApp Quick Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-indigo-950/60 via-zinc-900 to-zinc-900 border border-indigo-500/30 space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                  Status: Disponível para Contratação
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Interessado em contratar um Desenvolvedor Full-Stack com forte visão executiva ou acelerar seu negócio com automações inteligentes?
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="space-y-3">
              
              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-950 border border-emerald-800/50 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">WhatsApp</span>
                    <p className="text-sm font-bold text-white">{profileData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                    title="Copiar número"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={profileData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md shadow-emerald-600/20"
                  >
                    <span>Abrir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-indigo-800/50 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">E-mail</span>
                    <p className="text-sm font-bold text-white">{profileData.email}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(profileData.email, 'email')}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  title="Copiar e-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase font-mono">Localização</span>
                  <p className="text-sm font-bold text-white">{profileData.location}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 shadow-xl">
              
              <div className="pb-4 mb-6 border-b border-zinc-800">
                <h3 className="text-xl font-bold text-white font-display">
                  Envie uma Mensagem Direta
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Preencha os campos abaixo para iniciar um contato rápido.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white font-display">Mensagem Enviada!</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Obrigado pelo contato, {formName}! Seu aplicativo de e-mail foi acionado e entrarei em contato o mais breve possível.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 uppercase font-mono">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 uppercase font-mono">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="seuemail@empresa.com"
                        className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 uppercase font-mono">
                      Tipo de Contato
                    </label>
                    <select
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Recrutador / Vagas">Recrutador / Oportunidade de Emprego</option>
                      <option value="SaaS & Produto">Interesse no PetNexus / SaaS</option>
                      <option value="Automações / Bots">Orçamento de Automação / WhatsApp Bots</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 uppercase font-mono">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Descreva sua proposta ou projeto..."
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Anti-Spam Human Verification Box */}
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2.5 cursor-pointer text-xs font-mono text-zinc-300">
                        <input
                          type="checkbox"
                          checked={isHumanChecked}
                          onChange={(e) => setIsHumanChecked(e.target.checked)}
                          className="w-4 h-4 rounded bg-zinc-900 border-zinc-700 text-indigo-600 focus:ring-indigo-500 accent-indigo-600 cursor-pointer"
                        />
                        <span className="font-semibold text-white">Não sou um robô (Validação Anti-Spam)</span>
                      </label>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </div>

                    {isHumanChecked && (
                      <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-400 whitespace-nowrap">
                          Desafio humano: Quanto é <strong className="text-white font-bold">{num1} + {num2}</strong>?
                        </span>
                        <input
                          type="text"
                          required
                          value={userCaptcha}
                          onChange={(e) => setUserCaptcha(e.target.value)}
                          placeholder="Resultado"
                          className="w-24 px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-xs text-white text-center font-mono focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    )}

                    {captchaError && (
                      <p className="text-xs font-mono text-red-400 pt-1">
                        ⚠️ {captchaError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem (Encaminhar para E-mail)</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
