import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, ExternalLink, Copy, CheckCheck, Maximize2, X } from 'lucide-react';

interface HubEarningsCardProps {
  className?: string;
  allowZoom?: boolean;
}

export const HubEarningsCard: React.FC<HubEarningsCardProps> = ({ className = '', allowZoom = true }) => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inviteCode = "WWBDQ473";
  const inviteUrl = "https://ai.hub.xyz/r/WWBDQ473";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const CardContent = ({ inModal = false }: { inModal?: boolean }) => (
    <div className={`relative select-none overflow-hidden rounded-2xl border-2 border-zinc-400/80 bg-gradient-to-b from-[#fdfdfe] via-[#f4f6f9] to-[#e7ebf1] text-zinc-900 shadow-2xl transition-all duration-300 ${
      inModal ? 'w-full max-w-3xl' : 'w-full'
    }`}>
      {/* Outer Tech Border Inset */}
      <div className="absolute inset-1.5 rounded-xl border border-zinc-300/80 pointer-events-none" />
      <div className="absolute inset-3 rounded-lg border border-zinc-200/60 pointer-events-none" />

      {/* Tech Corner Accents */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-500 pointer-events-none" />
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-500 pointer-events-none" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-500 pointer-events-none" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-500 pointer-events-none" />

      {/* Subtle Dot Matrix & Tech Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
          backgroundSize: '12px 12px'
        }}
      />

      {/* Top Banner Tab: CARTÃO DE GANHOS */}
      <div className="relative pt-2 pb-1 flex justify-center">
        <div className="relative bg-zinc-100/90 backdrop-blur-xs px-5 py-1 rounded-b-md border-x border-b border-zinc-300 shadow-xs flex flex-col items-center">
          <span className="text-[10px] sm:text-[11px] font-mono font-black tracking-[0.25em] text-zinc-800 uppercase">
            Cartão de Ganhos
          </span>
          <div className="w-10 h-0.5 bg-emerald-500 rounded-full mt-0.5" />
        </div>
      </div>

      {/* Top Header Row */}
      <div className="relative px-5 sm:px-7 pt-1 pb-3 flex items-center justify-between">
        {/* Hub Logo */}
        <div className="flex items-center gap-2">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-sm">
              <path d="M20 3L36 12.2V27.8L20 37L4 27.8V12.2L20 3Z" fill="#00d182" />
              <path d="M20 3L36 12.2L20 21.4L4 12.2L20 3Z" fill="#10b981" />
              <path d="M20 21.4V37L36 27.8V12.2L20 21.4Z" fill="#059669" />
              <path d="M20 21.4L4 12.2V27.8L20 37V21.4Z" fill="#047857" />
              <path d="M20 10L29 15.2V24.8L20 30L11 24.8V15.2L20 10Z" fill="#f8fafc" />
            </svg>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 font-sans">
            Hub
          </span>
        </div>

        {/* Contribuidor Verificado Badge */}
        <div className="flex items-center gap-1.5 bg-white/80 border border-zinc-200/90 px-2.5 py-1 rounded-full shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-zinc-700 uppercase">
            Contribuidor Verificado
          </span>
          <ShieldCheck className="w-3.5 h-3.5 text-zinc-800" />
        </div>
      </div>

      {/* Main Card Body Grid */}
      <div className="relative px-5 sm:px-7 py-2 grid grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Left Column: Chip + QR Code */}
        <div className="col-span-3 flex flex-col justify-between h-full space-y-4">
          {/* Smart Chip */}
          <div className="w-11 h-8 sm:w-14 sm:h-10 rounded-md bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-300 border border-amber-600/50 shadow-inner relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0.5 border border-amber-700/40 rounded-xs opacity-70" />
            <div className="w-full h-px bg-amber-700/40" />
            <div className="absolute w-px h-full bg-amber-700/40" />
            <div className="w-3 h-3 rounded-full border border-amber-800/40 bg-amber-300/60" />
          </div>

          {/* QR Code with Tech Reticle */}
          <div className="relative p-1 bg-white rounded-lg border border-zinc-300 shadow-xs w-fit">
            {/* Reticle Brackets */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-emerald-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-emerald-500" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-emerald-500" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-emerald-500" />
            
            {/* SVG QR Code */}
            <svg className="w-14 h-14 sm:w-18 sm:h-18" viewBox="0 0 29 29" fill="black">
              {/* Corner 1 */}
              <rect x="2" y="2" width="7" height="7" fill="black" />
              <rect x="3" y="3" width="5" height="5" fill="white" />
              <rect x="4" y="4" width="3" height="3" fill="black" />
              {/* Corner 2 */}
              <rect x="20" y="2" width="7" height="7" fill="black" />
              <rect x="21" y="3" width="5" height="5" fill="white" />
              <rect x="22" y="4" width="3" height="3" fill="black" />
              {/* Corner 3 */}
              <rect x="2" y="20" width="7" height="7" fill="black" />
              <rect x="3" y="21" width="5" height="5" fill="white" />
              <rect x="4" y="22" width="3" height="3" fill="black" />
              {/* Data modules */}
              <rect x="11" y="3" width="2" height="2" fill="black" />
              <rect x="15" y="4" width="2" height="2" fill="black" />
              <rect x="11" y="7" width="2" height="2" fill="black" />
              <rect x="15" y="7" width="2" height="2" fill="black" />
              <rect x="11" y="11" width="7" height="2" fill="black" />
              <rect x="3" y="11" width="2" height="2" fill="black" />
              <rect x="7" y="11" width="2" height="2" fill="black" />
              <rect x="11" y="15" width="2" height="6" fill="black" />
              <rect x="15" y="15" width="4" height="2" fill="black" />
              <rect x="21" y="11" width="6" height="2" fill="black" />
              <rect x="21" y="15" width="2" height="4" fill="black" />
              <rect x="25" y="15" width="2" height="6" fill="black" />
              <rect x="21" y="23" width="4" height="2" fill="black" />
              <rect x="15" y="23" width="2" height="4" fill="black" />
            </svg>
          </div>
        </div>

        {/* Center Column: Total Ganho & Robot Figure */}
        <div className="col-span-6 flex flex-col items-center text-center">
          {/* Amount Box */}
          <div className="relative w-full max-w-xs px-3 sm:px-6 py-2 rounded-xl bg-white/95 border-2 border-zinc-300 shadow-md">
            <div className="text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-600 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              <span>TOTAL GANHO</span>
              <span className="w-6 h-px bg-emerald-400" />
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-sans mt-0.5">
              R$ 130.70
            </div>
          </div>

          {/* Futuristic Robot Artwork Container with Circular HUD rings */}
          <div className="relative mt-2 flex items-center justify-center w-full h-32 sm:h-40 overflow-hidden">
            {/* Concentric HUD rings */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-zinc-300/80 pointer-events-none" />
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-emerald-400/30 border-dashed pointer-events-none" />

            {/* High-Tech Vector Robot */}
            <svg className="h-full w-auto drop-shadow-md z-10" viewBox="0 0 160 220" fill="none">
              {/* Torso Armor */}
              <path d="M55 90 L105 90 L115 140 L95 180 L65 180 L45 140 Z" fill="#1f2937" stroke="#374151" strokeWidth="2" />
              <path d="M60 95 L100 95 L108 135 L90 170 L70 170 L52 135 Z" fill="#e5e7eb" />
              <path d="M68 115 L92 115 L88 150 L72 150 Z" fill="#111827" />

              {/* Chest Hub Badge */}
              <g transform="translate(72, 122) scale(0.4)">
                <path d="M20 3L36 12.2V27.8L20 37L4 27.8V12.2L20 3Z" fill="#00d182" />
                <path d="M20 3L36 12.2L20 21.4L4 12.2L20 3Z" fill="#10b981" />
              </g>

              {/* Shoulders */}
              <ellipse cx="40" cy="98" rx="14" ry="12" fill="#374151" stroke="#4b5563" strokeWidth="1.5" />
              <ellipse cx="120" cy="98" rx="14" ry="12" fill="#374151" stroke="#4b5563" strokeWidth="1.5" />
              <circle cx="40" cy="98" r="6" fill="#e5e7eb" />
              <circle cx="120" cy="98" r="6" fill="#e5e7eb" />

              {/* Arms */}
              <path d="M33 105 L26 150 L36 185 L44 185 L38 150 L45 105 Z" fill="#1f2937" />
              <path d="M127 105 L134 150 L124 185 L116 185 L122 150 L115 105 Z" fill="#1f2937" />
              <circle cx="31" cy="188" r="7" fill="#111827" />
              <circle cx="129" cy="188" r="7" fill="#111827" />

              {/* Head / Helmet */}
              <ellipse cx="80" cy="48" rx="22" ry="28" fill="#111827" stroke="#374151" strokeWidth="2" />
              {/* Glowing Green Visor Line */}
              <path d="M64 45 Q80 54 96 45 Q80 50 64 45" fill="#00d182" filter="drop-shadow(0 0 6px #00d182)" />
              {/* Helmet Chin Guard */}
              <path d="M68 64 L92 64 L86 74 L74 74 Z" fill="#4b5563" />
              {/* Neck Joint */}
              <rect x="72" y="76" width="16" height="14" rx="3" fill="#1f2937" />
            </svg>
          </div>
        </div>

        {/* Right Column: Seal & Status Badge */}
        <div className="col-span-3 flex flex-col items-center sm:items-end justify-between h-full space-y-3">
          {/* Circular Seal: POWERING THE AI CONTRIBUTOR ECONOMY */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-emerald-600/40 flex items-center justify-center p-1 bg-white/90 shadow-xs">
            {/* Fine outer dashed ring */}
            <div className="absolute inset-0.5 rounded-full border border-dashed border-zinc-400 pointer-events-none" />
            
            {/* Rotating / Static Text around seal */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path id="sealPath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
              <text className="text-[7.5px] font-mono font-bold tracking-[0.18em] fill-zinc-700 uppercase">
                <textPath href="#sealPath" startOffset="0%">
                  • POWERING THE AI CONTRIBUTOR ECONOMY •
                </textPath>
              </text>
            </svg>

            {/* Center Logo in Seal */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d="M20 3L36 12.2V27.8L20 37L4 27.8V12.2L20 3Z" fill="#00d182" />
                  <path d="M20 3L36 12.2L20 21.4L4 12.2L20 3Z" fill="#10b981" />
                  <path d="M20 21.4V37L36 27.8V12.2L20 21.4Z" fill="#059669" />
                  <path d="M20 21.4L4 12.2V27.8L20 37V21.4Z" fill="#047857" />
                  <path d="M20 10L29 15.2V24.8L20 30L11 24.8V15.2L20 10Z" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>

          {/* Status Box */}
          <div className="w-full max-w-[110px] sm:max-w-[130px] rounded-lg bg-white/90 border border-zinc-300 p-1.5 sm:p-2 text-center shadow-xs">
            <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-zinc-500 uppercase block font-semibold">
              Status
            </span>
            <div className="flex items-center justify-center gap-1 mt-0.5 text-zinc-900 font-extrabold text-[10px] sm:text-xs tracking-wider">
              <span>VERIFICADO</span>
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Tab: CONSTRUINDO O FUTURO . GANHANDO JUNTOS */}
      <div className="relative border-t border-zinc-300/80 bg-zinc-200/60 px-4 py-1.5 flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono font-bold text-zinc-700 tracking-wider">
        <span className="text-zinc-400 font-mono hidden sm:inline">ID: #HUB-VERIFIED-AI</span>
        <div className="flex items-center gap-2 mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>CONSTRUINDO O FUTURO . GANHANDO JUNTOS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
        <span className="text-zinc-400 font-mono hidden sm:inline">2026</span>
      </div>
    </div>
  );

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Container with Interactive Header & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Fonte Principal de Renda • Comprovante Oficial
          </span>
        </div>

        <div className="flex items-center gap-2">
          {allowZoom && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              title="Expandir comprovante"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expandir</span>
            </button>
          )}

          <a
            href={inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Acessar Hub</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-mono transition-colors"
            title="Copiar link com código de convite WWBDQ473"
          >
            {copied ? (
              <>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Código: {inviteCode}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Embedded Render of the Card */}
      <div 
        onClick={() => allowZoom && setIsModalOpen(true)}
        className={`${allowZoom ? 'cursor-pointer hover:scale-[1.01] transition-transform duration-200' : ''}`}
      >
        <CardContent />
      </div>

      {/* Lightbox Modal when clicked to expand */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <CardContent inModal={true} />
            <div className="text-center mt-3 text-xs text-zinc-400 font-mono">
              Comprovante Oficial de Ganhos emitido pelo ecossistema <strong>Hub (ai.hub.xyz)</strong> • Código de Acesso: <strong>WWBDQ473</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
