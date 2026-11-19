import React from 'react';

interface ProjectMockupProps {
  type: 'saas' | 'health' | 'edtech' | 'robotics' | 'luxury' | 'fintech' | 'tokens' | 'wireframe';
  accentColor: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, accentColor: _accentColor }) => {
  if (type === 'tokens') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0C0D0E] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5FF45]" />
            <span className="text-[#F5F3EF] font-bold text-xs">ATOMIC DESIGN TOKENS // V2.4</span>
          </div>
          <span className="text-[10px] text-[#8E8E93]">FIGMA TOKEN BRIDGE • WCAG AAA</span>
        </div>

        {/* Color Palette Swatches */}
        <div className="space-y-2 my-2">
          <span className="text-[10px] text-[#8E8E93] block">CORE COLOR TOKENS</span>
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2.5 rounded-lg bg-[#C5FF45] text-[#101010] font-bold">
              <span className="block text-[10px]">ELECTRIC LIME</span>
              <span className="text-[9px] opacity-75">#C5FF45</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#141414] border border-white/20 text-[#F5F3EF]">
              <span className="block text-[10px]">ONYX CORE</span>
              <span className="text-[9px] text-[#8E8E93]">#101010</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#222222] border border-white/10 text-[#F5F3EF]">
              <span className="block text-[10px]">SURFACE ELEV</span>
              <span className="text-[9px] text-[#8E8E93]">#181818</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#FF5F56] text-white font-bold">
              <span className="block text-[10px]">ALERT CRIT</span>
              <span className="text-[9px] opacity-80">#FF5F56</span>
            </div>
          </div>
        </div>

        {/* Typography & Spacing scale */}
        <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#141618] border border-white/10">
          <div>
            <span className="text-[10px] text-[#8E8E93] block mb-1">TYPE SCALE</span>
            <div className="font-display font-extrabold text-sm text-[#F5F3EF]">Display / 48px / -0.02em</div>
            <div className="font-sans-main text-xs text-[#8E8E93]">Body / 15px / 1.6 / Medium</div>
            <div className="font-mono-code text-[10px] text-[#C5FF45]">Code / 12px / Tabular</div>
          </div>
          <div>
            <span className="text-[10px] text-[#8E8E93] block mb-1">SPACING &amp; RADII</span>
            <div className="flex items-center gap-1.5 text-[10px] text-[#F5F3EF] mt-1">
              <span className="px-2 py-0.5 rounded bg-white/10">4px</span>
              <span className="px-2 py-0.5 rounded-md bg-white/10">8px</span>
              <span className="px-2 py-0.5 rounded-lg bg-white/10">16px</span>
              <span className="px-2 py-0.5 rounded-xl bg-[#C5FF45]/20 text-[#C5FF45]">24px</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#8E8E93] pt-2">
          <span>COMPONENTS: 240+ SYNCED</span>
          <span className="text-[#C5FF45]">REACT &amp; TAILWIND COMPLIANT</span>
        </div>
      </div>
    );
  }

  if (type === 'wireframe') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0E1012] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-blue-300 font-bold text-xs">BLUEPRINT WIREFRAME // 12-COL SNAP</span>
          </div>
          <span className="text-[10px] text-blue-400/70">LOW-FI PROTOTYPE</span>
        </div>

        {/* Blueprint Grid Layout */}
        <div className="my-2 p-3 bg-blue-950/20 border border-blue-500/30 rounded-xl space-y-2">
          {/* Top Bar Wireframe */}
          <div className="h-5 bg-blue-500/10 border border-blue-500/20 rounded flex items-center px-2 justify-between">
            <div className="w-12 h-2 bg-blue-400/40 rounded" />
            <div className="flex gap-1.5">
              <div className="w-8 h-2 bg-blue-400/20 rounded" />
              <div className="w-8 h-2 bg-blue-400/20 rounded" />
            </div>
          </div>

          {/* 3-Col Widget Wireframe */}
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 bg-blue-500/5 border border-dashed border-blue-500/30 rounded p-2 flex flex-col justify-between">
              <div className="w-10 h-2 bg-blue-400/30 rounded" />
              <div className="w-14 h-4 bg-blue-400/50 rounded" />
            </div>
            <div className="h-16 bg-blue-500/5 border border-dashed border-blue-500/30 rounded p-2 flex flex-col justify-between">
              <div className="w-12 h-2 bg-blue-400/30 rounded" />
              <div className="w-16 h-4 bg-blue-400/50 rounded" />
            </div>
            <div className="h-16 bg-blue-500/5 border border-dashed border-blue-500/30 rounded p-2 flex flex-col justify-between">
              <div className="w-8 h-2 bg-blue-400/30 rounded" />
              <div className="w-12 h-4 bg-blue-400/50 rounded" />
            </div>
          </div>

          {/* Main Chart Area Wireframe */}
          <div className="h-16 bg-blue-500/5 border border-blue-500/20 rounded p-2 flex items-center justify-center">
            <svg viewBox="0 0 200 40" className="w-full h-8 opacity-40">
              <polyline points="0,30 40,20 80,25 120,10 160,18 200,5" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-blue-400/70 pt-2">
          <span>LAYOUT ITERATION: #14</span>
          <span>TESTED WITH 18 USERS</span>
        </div>
      </div>
    );
  }

  if (type === 'saas') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0E1012] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none overflow-hidden">
        {/* Top Console Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-[#8E8E93] text-[11px]">chronos://cluster-01.telemetry.ai</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5FF45] animate-pulse-subtle" />
            <span className="text-[#C5FF45] text-[10px]">99.99% HEALTHY</span>
          </div>
        </div>

        {/* Central SaaS Telemetry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-lg bg-[#14171A] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">STREAM LATENCY</span>
            <span className="font-bold text-lg text-[#F5F3EF]">1.42 ms</span>
            <span className="text-[10px] text-[#C5FF45]">↓ 14% improvement</span>
          </div>
          <div className="p-3 rounded-lg bg-[#14171A] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">NEURAL NODES</span>
            <span className="font-bold text-lg text-[#F5F3EF]">1,024 Active</span>
            <span className="text-[10px] text-[#8E8E93]">Autonomous sharding</span>
          </div>
          <div className="p-3 rounded-lg bg-[#14171A] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">THROUGHPUT</span>
            <span className="font-bold text-lg text-[#C5FF45]">4.2 GB/s</span>
            <span className="text-[10px] text-[#C5FF45]">Zero packet loss</span>
          </div>
        </div>

        {/* Visual Line Chart SVG */}
        <div className="relative w-full h-32 sm:h-36 bg-[#131518] rounded-xl p-3 border border-white/10 flex flex-col justify-end">
          <div className="absolute top-3 left-3 text-[10px] text-[#8E8E93] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF45]" />
            <span>PREDICTIVE ANOMALY STREAM (LAST 24 HOURS)</span>
          </div>
          <svg viewBox="0 0 500 120" className="w-full h-24 overflow-visible">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C5FF45" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C5FF45" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="0" y1="20" x2="500" y2="20" stroke="#222" strokeWidth="1" strokeDasharray="4" />
            <line x1="0" y1="60" x2="500" y2="60" stroke="#222" strokeWidth="1" strokeDasharray="4" />
            <line x1="0" y1="100" x2="500" y2="100" stroke="#222" strokeWidth="1" strokeDasharray="4" />

            {/* Gradient Area */}
            <path
              d="M 0 90 Q 70 70, 130 80 T 250 40 T 370 65 T 500 20 L 500 120 L 0 120 Z"
              fill="url(#chartGrad)"
            />
            {/* Stroke Line */}
            <path
              d="M 0 90 Q 70 70, 130 80 T 250 40 T 370 65 T 500 20"
              fill="none"
              stroke="#C5FF45"
              strokeWidth="2.5"
            />
            {/* Anomaly Highlight Dot */}
            <circle cx="250" cy="40" r="5" fill="#FF5F56" />
            <circle cx="250" cy="40" r="10" fill="#FF5F56" fillOpacity="0.3" />
            <circle cx="500" cy="20" r="4" fill="#C5FF45" />
          </svg>
        </div>

        {/* Bottom Status Feed */}
        <div className="flex items-center justify-between text-[10px] text-[#8E8E93] pt-3">
          <span>MODEL: ANOMALY-L3 • CONTINUOUS TRAIN</span>
          <span className="text-[#C5FF45]">[ 100% AUDIT PASS ]</span>
        </div>
      </div>
    );
  }

  if (type === 'health') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0A1014] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none">
        {/* Clinical Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#45FFB8] animate-pulse-subtle" />
            <span className="text-[#45FFB8] font-bold text-xs">ICU BED 04 // PATIENT #8921-X</span>
          </div>
          <span className="text-[10px] text-[#8E8E93] bg-[#101D24] px-2.5 py-1 rounded-full border border-white/10">
            TRIAGE: STABLE
          </span>
        </div>

        {/* Vital Signs Grid */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="p-3 rounded-lg bg-[#0E171E] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">HEART RATE</span>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-xl text-[#45FFB8]">72</span>
              <span className="text-[10px] text-[#8E8E93]">BPM</span>
            </div>
            <span className="text-[9px] text-[#45FFB8]">Normal Sinus</span>
          </div>
          <div className="p-3 rounded-lg bg-[#0E171E] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">SpO2 PULSE</span>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-xl text-[#F5F3EF]">99%</span>
            </div>
            <span className="text-[9px] text-[#45FFB8]">Adequate Saturation</span>
          </div>
          <div className="p-3 rounded-lg bg-[#0E171E] border border-white/10">
            <span className="text-[10px] text-[#8E8E93] block">BLOOD PRESS.</span>
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg text-[#F5F3EF]">118/78</span>
            </div>
            <span className="text-[9px] text-[#8E8E93]">Normotensive</span>
          </div>
        </div>

        {/* Live ECG Wave Graphic */}
        <div className="relative w-full h-32 bg-[#0B151C] rounded-xl p-3 border border-white/10 overflow-hidden flex flex-col justify-end">
          <div className="absolute top-2 left-3 text-[10px] text-[#45FFB8]">
            CONTINUOUS ECG LEAD II (1mV/mm)
          </div>
          <svg viewBox="0 0 500 80" className="w-full h-20">
            <path
              d="M 0 40 L 40 40 L 50 35 L 60 40 L 80 40 L 90 48 L 100 10 L 110 65 L 120 40 L 140 40 L 155 32 L 170 40 L 220 40 L 230 35 L 240 40 L 260 40 L 270 48 L 280 10 L 290 65 L 300 40 L 320 40 L 335 32 L 350 40 L 400 40 L 410 35 L 420 40 L 440 40 L 450 48 L 460 10 L 470 65 L 480 40 L 500 40"
              fill="none"
              stroke="#45FFB8"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[10px] text-[#8E8E93] pt-3">
          <span>SECURE TELEMETRY LINKED</span>
          <span className="text-[#45FFB8]">DOCTOR SYNC ACTIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'edtech') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#120E16] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-sm">🔥</span>
            <span className="text-[#FF6584] font-bold">14-DAY STREAK</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5FF45]" />
            <span className="text-[#F5F3EF] text-[11px]">LEVEL 08 • NEURAL ARCHITECT</span>
          </div>
        </div>

        {/* Spatial Knowledge Graph Visualization */}
        <div className="relative w-full h-44 bg-[#191320] rounded-xl border border-white/10 p-3 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 400 180" className="w-full h-full">
            {/* Graph Connections */}
            <line x1="200" y1="90" x2="120" y2="50" stroke="#FF6584" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="200" y1="90" x2="280" y2="45" stroke="#C5FF45" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="200" y1="90" x2="140" y2="135" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="200" y1="90" x2="270" y2="130" stroke="#FF6584" strokeWidth="1.5" strokeOpacity="0.4" />
            <line x1="120" y1="50" x2="60" y2="90" stroke="#8E8E93" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="280" y1="45" x2="340" y2="80" stroke="#8E8E93" strokeWidth="1" strokeDasharray="3 3" />

            {/* Nodes */}
            <circle cx="200" cy="90" r="22" fill="#FF6584" fillOpacity="0.2" stroke="#FF6584" strokeWidth="2" />
            <text x="200" y="94" textAnchor="middle" fill="#F5F3EF" fontSize="10" fontWeight="bold">SYNAPSE</text>

            <circle cx="120" cy="50" r="16" fill="#1E1428" stroke="#FF6584" strokeWidth="1.5" />
            <text x="120" y="53" textAnchor="middle" fill="#FF6584" fontSize="8">LOGIC</text>

            <circle cx="280" cy="45" r="18" fill="#1E1428" stroke="#C5FF45" strokeWidth="1.5" />
            <text x="280" y="48" textAnchor="middle" fill="#C5FF45" fontSize="8">NEURON</text>

            <circle cx="140" cy="135" r="15" fill="#1E1428" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x="140" y="138" textAnchor="middle" fill="#8B5CF6" fontSize="8">SPATIAL</text>

            <circle cx="270" cy="130" r="15" fill="#1E1428" stroke="#FF6584" strokeWidth="1.5" />
            <text x="270" y="133" textAnchor="middle" fill="#FF6584" fontSize="8">RECALL</text>
          </svg>
        </div>

        {/* Daily Mastery Card */}
        <div className="p-3 bg-[#181220] rounded-xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#8E8E93] block">TODAY&apos;S CONCEPT</span>
            <span className="font-bold text-sm text-[#F5F3EF]">Algorithmic Game Theory</span>
          </div>
          <span className="px-3 py-1 bg-[#FF6584] text-[#120E16] font-bold text-[10px] rounded-full">
            START SPRINT [3 MIN]
          </span>
        </div>
      </div>
    );
  }

  if (type === 'robotics') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0E0E0E] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none">
        {/* Technical Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-[#FF9E44] font-bold">VANGUARD KINEMATICS // MOD-06</span>
          </div>
          <span className="text-[10px] text-[#8E8E93]">6-AXIS INDUSTRIAL MANIPULATOR</span>
        </div>

        {/* Robotic Arm Vector Wireframe */}
        <div className="relative w-full h-44 bg-[#141414] rounded-xl border border-white/10 p-4 flex items-center justify-center">
          <svg viewBox="0 0 400 180" className="w-full h-full">
            {/* Grid */}
            <circle cx="200" cy="140" r="80" fill="none" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="80" y1="140" x2="320" y2="140" stroke="#252525" strokeWidth="1" />

            {/* Base */}
            <rect x="170" y="135" width="60" height="15" rx="3" fill="#222" stroke="#FF9E44" strokeWidth="1.5" />
            
            {/* Link 1 */}
            <line x1="200" y1="135" x2="160" y2="70" stroke="#F5F3EF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="200" cy="135" r="7" fill="#FF9E44" />
            <circle cx="160" cy="70" r="6" fill="#C5FF45" />

            {/* Link 2 */}
            <line x1="160" y1="70" x2="250" y2="40" stroke="#F5F3EF" strokeWidth="4" strokeLinecap="round" />
            <circle cx="250" cy="40" r="5" fill="#FF9E44" />

            {/* End Effector */}
            <line x1="250" y1="40" x2="290" y2="60" stroke="#FF9E44" strokeWidth="2.5" />
            <polygon points="290,55 305,60 290,65" fill="#C5FF45" />

            {/* Telemetry Labels */}
            <text x="140" y="55" fill="#8E8E93" fontSize="8">J1: 42.8°</text>
            <text x="260" y="30" fill="#FF9E44" fontSize="8">J2: 112.4°</text>
            <text x="310" y="65" fill="#C5FF45" fontSize="8">TOOL READY</text>
          </svg>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 bg-[#171717] rounded border border-white/10">
            <span className="text-[#8E8E93] block">PAYLOAD</span>
            <span className="font-bold text-[#F5F3EF]">500 KG</span>
          </div>
          <div className="p-2 bg-[#171717] rounded border border-white/10">
            <span className="text-[#8E8E93] block">REPEATABILITY</span>
            <span className="font-bold text-[#FF9E44]">±0.02 mm</span>
          </div>
          <div className="p-2 bg-[#171717] rounded border border-white/10">
            <span className="text-[#8E8E93] block">SAFETY</span>
            <span className="font-bold text-[#C5FF45]">ISO 10218</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'luxury') {
    return (
      <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0C0B0A] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none">
        {/* Luxury Brand Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="font-display tracking-widest text-[#E2C275] font-bold text-xs">
            SÓLSTICE ATELIER // GENÈVE
          </span>
          <span className="text-[10px] text-[#8E8E93]">PIECE UNIQUE N° 01/25</span>
        </div>

        {/* Mechanical Timepiece Visual */}
        <div className="relative w-full h-44 bg-[#121110] rounded-xl border border-white/10 p-3 flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-36 h-36">
            <defs>
              <radialGradient id="dialGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22201d" />
                <stop offset="80%" stopColor="#11100e" />
                <stop offset="100%" stopColor="#0a0908" />
              </radialGradient>
            </defs>
            {/* Outer Bezel */}
            <circle cx="100" cy="100" r="90" fill="url(#dialGrad)" stroke="#E2C275" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="82" fill="none" stroke="#8E8E93" strokeWidth="0.75" strokeDasharray="2 6" />

            {/* Hour Markers */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 100 + Math.cos(rad) * 72;
              const y1 = 100 + Math.sin(rad) * 72;
              const x2 = 100 + Math.cos(rad) * 79;
              const y2 = 100 + Math.sin(rad) * 79;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E2C275" strokeWidth="1.5" />;
            })}

            {/* Tourbillon Opening */}
            <circle cx="100" cy="135" r="24" fill="#181614" stroke="#E2C275" strokeWidth="1" />
            <circle cx="100" cy="135" r="16" fill="none" stroke="#C5FF45" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="100" cy="135" r="3" fill="#E2C275" />

            {/* Hands */}
            <line x1="100" y1="100" x2="70" y2="80" stroke="#F5F3EF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="100" y1="100" x2="135" y2="60" stroke="#F5F3EF" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="100" y1="100" x2="100" y2="40" stroke="#C5FF45" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="#E2C275" />
          </svg>
        </div>

        {/* Price & Configurator Bar */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[10px] text-[#8E8E93] block">TITANIUM &amp; SAPPHIRE</span>
            <span className="font-display font-bold text-sm text-[#E2C275]">$45,000 USD</span>
          </div>
          <span className="px-3 py-1 bg-[#1e1c18] border border-[#E2C275]/40 text-[#E2C275] text-[10px] rounded-full">
            CUSTOMIZE DIAL →
          </span>
        </div>
      </div>
    );
  }

  // Fintech
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] bg-[#0C0D0E] p-5 sm:p-7 flex flex-col justify-between font-mono-code text-xs select-none">
      {/* NeoBank Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <span className="text-[#C5FF45] font-bold">VAULTX GLOBAL TREASURY</span>
        <span className="text-[10px] text-[#8E8E93]">AUTO-HEDGED FX</span>
      </div>

      {/* Titanium NeoBank Card */}
      <div className="relative w-full h-36 bg-gradient-to-tr from-[#16181B] via-[#24282F] to-[#141619] rounded-2xl p-4 border border-white/15 shadow-2xl flex flex-col justify-between overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="w-8 h-6 rounded bg-[#C5FF45]/20 border border-[#C5FF45] flex items-center justify-center">
            <span className="text-[8px] text-[#C5FF45]">CHIP</span>
          </div>
          <span className="font-display font-black text-sm tracking-wider text-[#F5F3EF]">VAULTX</span>
        </div>

        <div>
          <span className="font-mono-code text-xs tracking-widest text-[#F5F3EF] block">
            •••• •••• •••• 9842
          </span>
          <div className="flex justify-between text-[9px] text-[#8E8E93] mt-1">
            <span>SANTHOSH KUMAR</span>
            <span>EXP 08/29</span>
          </div>
        </div>
      </div>

      {/* Account Balance Telemetry */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="text-[10px] text-[#8E8E93] block">MULTI-CURRENCY LIQUIDITY</span>
          <span className="font-display font-bold text-lg text-[#F5F3EF]">$148,290.40</span>
        </div>
        <span className="px-3 py-1 bg-[#C5FF45] text-[#101010] font-bold text-[10px] rounded-full">
          SWAP FX (0%)
        </span>
      </div>
    </div>
  );
};
