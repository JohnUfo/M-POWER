
import React, { useState, useRef } from 'react';
import { Binary, Box, Crosshair, Filter, Code, ArrowRight, Zap, MessageSquare, Terminal, TrendingDown, Layers, Search, List, RotateCw, Key, Package, Eye, EyeOff, Activity, Percent, Divide } from 'lucide-react';
import { LessonSection } from '../types';

interface VisualProps {
  id?: string;
  lessonContext?: LessonSection;
}

interface HUDState {
  x: number;
  y: number;
  visible: boolean;
  title: string;
  desc: string;
}

const FloatingHUD: React.FC<HUDState> = ({ x, y, visible, title, desc }) => {
  if (!visible) return null;

  return (
    <div 
      className="absolute z-[100] pointer-events-none transition-all duration-300 ease-out"
      style={{ 
        left: 0,
        top: 0,
        transform: `translate(${x + 15}px, ${y + 15}px)`,
        maxWidth: '220px'
      }}
    >
      <div className="backdrop-blur-md p-3.5 rounded-xl border border-blue-500/40 bg-slate-900/95 text-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-2 mb-1.5 border-b border-blue-500/20 pb-1.5">
          <Crosshair size={10} className="text-blue-400 animate-spin-slow" />
          <h5 className="font-black text-[9px] uppercase tracking-widest text-blue-400">
            {title}
          </h5>
        </div>
        <p className="text-[10px] leading-relaxed font-bold italic text-slate-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Visuals: React.FC<VisualProps> = ({ id }) => {
  const [hud, setHud] = useState<HUDState>({ x: 0, y: 0, visible: false, title: '', desc: '' });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent, defaultTitle: string, defaultDesc: string) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHud(prev => ({
      ...prev,
      x,
      y,
      visible: true,
      title: prev.title || defaultTitle,
      desc: prev.desc || defaultDesc
    }));
  };

  const setHotspot = (title: string, desc: string) => {
    setHud(prev => ({ ...prev, title, desc }));
  };

  const clearHotspot = (defaultTitle: string, defaultDesc: string) => {
    setHud(prev => ({ ...prev, title: defaultTitle, desc: defaultDesc }));
  };

  if (!id) return null;

  const renderVisualArea = (defaultTitle: string, defaultDesc: string, children: React.ReactNode, bgColor = "bg-[#0a0f1e]") => (
    <div 
      ref={containerRef}
      className={`relative w-full px-8 py-10 min-h-[300px] flex flex-col justify-center overflow-hidden transition-all duration-500 rounded-3xl border border-slate-200 shadow-2xl group ${bgColor}`}
      onMouseMove={(e) => handleMouseMove(e, defaultTitle, defaultDesc)}
      onMouseLeave={() => setHud(prev => ({ ...prev, visible: false, title: '', desc: '' }))}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      <FloatingHUD {...hud} />
      
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );

  switch (id) {
    case 'arithmetic':
      return renderVisualArea("ALU Operation", "Direct hardware calculation on binary registers.", (
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center gap-2" onMouseEnter={() => setHotspot("Register A", "Holds 10.")} onMouseLeave={() => clearHotspot("ALU Operation", "Direct hardware calculation.")}>
            <div className="w-16 h-16 bg-[#020617] border-2 border-blue-500/30 rounded-2xl flex items-center justify-center text-2xl font-black text-white">10</div>
            <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest">Input_A</span>
          </div>
          <div className="text-3xl font-black text-rose-500 animate-pulse">+</div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#020617] border-2 border-blue-500/30 rounded-2xl flex items-center justify-center text-2xl font-black text-white">5</div>
            <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest">Input_B</span>
          </div>
          <ArrowRight className="text-slate-700" size={24} />
          <div className="relative" onMouseEnter={() => setHotspot("Accumulator", "Final computed result.")}>
            <div className="w-20 h-20 bg-blue-600 border-2 border-blue-400 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-blue-500/20">15</div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[7px] font-black text-emerald-400 uppercase tracking-widest">Result</div>
          </div>
        </div>
      ));

    case 'division':
      return renderVisualArea("Division Logic", "Compare float result vs whole number floor division.", (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-center px-4">
           <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center" onMouseEnter={() => setHotspot("True Division", "The / operator returns an exact decimal (float).")}>
              <div className="text-2xl font-black text-white mb-2">5 / 2</div>
              <ArrowRight className="mx-auto text-blue-500 rotate-90" />
              <div className="mt-2 py-3 bg-blue-600 rounded-xl font-mono font-black text-white">2.5</div>
              <span className="text-[8px] font-black text-blue-300 uppercase mt-2 block">Float Result</span>
           </div>
           
           <div className="flex justify-center">
              <Divide size={32} className="text-slate-700" />
           </div>

           <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-center" onMouseEnter={() => setHotspot("Floor Division", "The // operator removes decimals and returns an integer.")}>
              <div className="text-2xl font-black text-white mb-2">5 // 2</div>
              <ArrowRight className="mx-auto text-rose-500 rotate-90" />
              <div className="mt-2 py-3 bg-rose-600 rounded-xl font-mono font-black text-white">2</div>
              <span className="text-[8px] font-black text-rose-300 uppercase mt-2 block">Int Result</span>
           </div>
        </div>
      ));

    case 'signal-noise':
      return renderVisualArea("Execution Filter", "Comments are visible to humans but invisible to the machine.", (
        <div className="flex items-center justify-center gap-12 w-full">
           <div className="space-y-3 flex-1 max-w-[280px]">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between group/code" 
                onMouseEnter={() => setHotspot("Logical Signal", "This code performs an action (printing).")}
              >
                <code className="text-[11px] text-blue-400 font-mono">print("Ready")</code>
                <Eye size={14} className="text-blue-400" />
              </div>
              <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center justify-between opacity-50" 
                onMouseEnter={() => setHotspot("Human Noise", "This is a comment. The machine skips this entirely.")}
              >
                <code className="text-[11px] text-rose-400 font-mono italic"># User login logic</code>
                <EyeOff size={14} className="text-rose-400" />
              </div>
           </div>
           <ArrowRight className="text-slate-700" size={32} />
           <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-slate-900 border-2 border-emerald-500/50 rounded-full flex items-center justify-center shadow-2xl">
                 <Terminal size={32} className="text-emerald-400" />
              </div>
              <span className="text-[9px] font-black uppercase text-emerald-400 tracking-widest">CPU Processor</span>
           </div>
        </div>
      ));

    case 'variables':
      return renderVisualArea("Memory Slot", "Naming a specific location in hardware RAM.", (
        <div className="flex items-center justify-center gap-6 w-full">
          {[
            { label: 'Label', val: 'test_var', color: 'bg-blue-600', desc: "Human reference name." },
            { label: 'Address', val: '0xFF1A', color: 'bg-slate-900', desc: "Physical RAM index." },
            { label: 'Data', val: '9', color: 'bg-rose-600', desc: "Stored bit pattern." }
          ].map((item, i) => (
            <div key={i} className="flex-1 max-w-[140px] p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-3" onMouseEnter={() => setHotspot(item.label, item.desc)}>
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
              <div className={`w-full py-4 rounded-xl ${item.color} text-white font-mono font-bold text-center border border-white/10 text-sm`}>
                {item.val}
              </div>
            </div>
          ))}
        </div>
      ));

    case 'update-var':
      return renderVisualArea("Register Overwrite", "Variables change state as code executes.", (
        <div className="flex items-center justify-center gap-8 w-full">
           <div className="text-center opacity-30 scale-75" onMouseEnter={() => setHotspot("Deleted", "The old value is dropped.")}>
              <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-xl font-bold text-slate-500">5</div>
              <div className="mt-2 text-[7px] font-black text-slate-600 uppercase">Ejected</div>
           </div>
           <ArrowRight className="text-blue-500" size={24} />
           <div className="relative text-center" onMouseEnter={() => setHotspot("Active", "The current value stored in memory.")}>
              <div className="w-20 h-20 bg-blue-600 border-2 border-blue-400 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl shadow-blue-500/30">10</div>
              <div className="mt-2 text-[8px] font-black text-blue-400 uppercase tracking-widest">Score</div>
              <div className="absolute inset-0 rounded-2xl border border-blue-400/50 animate-ping opacity-20" />
           </div>
        </div>
      ));

    case 'multi-var':
      return renderVisualArea("Aggregate Logic", "Combining discrete variables for complex output.", (
        <div className="flex items-center justify-center gap-6 w-full">
           <div className="flex gap-2">
              {['365', '24', '60'].map((v, i) => (
                <div key={i} className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-xs text-blue-400 font-mono">{v}</div>
              ))}
           </div>
           <ArrowRight className="text-slate-700" />
           <div className="p-4 bg-rose-600 rounded-xl shadow-xl border border-rose-400 text-white font-black italic text-lg" onMouseEnter={() => setHotspot("Calculated Sum", "Final value after multiplying inputs.")}>
              525,600
           </div>
        </div>
      ));

    case 'debug-typo':
      return renderVisualArea("Syntax Validator", "The interpreter fails if a label doesn't match its definition.", (
        <div className="w-full max-w-md mx-auto p-5 bg-slate-900 border border-slate-800 rounded-xl font-mono text-[11px]">
           <div className="text-emerald-400 mb-2">user_id = 101</div>
           <div className="flex items-center justify-between text-rose-500 bg-rose-500/5 p-2 rounded border border-rose-500/20" onMouseEnter={() => setHotspot("Typo Error", "Attempting to use 'user_d' instead of 'user_id'.")}>
              <span>print(user_d)</span>
              <X size={14} />
           </div>
           <div className="mt-4 text-[8px] font-black text-rose-500 uppercase">NameError: 'user_d' is not defined</div>
        </div>
      ));

    case 'indentation':
      return renderVisualArea("Scope Nesting", "Whitespace determines the boundaries of logic blocks.", (
        <div className="w-full max-w-[280px] mx-auto space-y-2">
           <div className="h-8 bg-slate-900 rounded border border-slate-800 flex items-center px-3 text-[10px] text-blue-400 font-mono">if active:</div>
           <div className="flex">
              <div className="w-8 border-l-2 border-b-2 border-blue-500/30 rounded-bl-lg h-12 ml-4" />
              <div className="flex-1 mt-4 ml-2">
                 <div className="h-8 bg-blue-600/10 border border-blue-500/30 rounded flex items-center px-3 text-[10px] text-blue-400 font-mono" onMouseEnter={() => setHotspot("Scope Block", "Only runs if parent is True.")}>print("Access granted")</div>
              </div>
           </div>
        </div>
      ));

    case 'func-scope':
      return renderVisualArea("IO Machine", "Functions transform input signals into results.", (
        <div className="flex items-center justify-center gap-6 w-full">
           <div className="text-right" onMouseEnter={() => setHotspot("Args", "Inputs for the function.")}>
              <div className="text-[8px] font-black text-slate-500 uppercase">Input</div>
              <div className="p-2 bg-slate-800 rounded text-xs text-white">X, Y</div>
           </div>
           <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl border border-blue-400" onMouseEnter={() => setHotspot("Logic", "Internal processing code.")}>
              <RotateCw className="text-white animate-spin-slow" size={24} />
           </div>
           <div className="text-left" onMouseEnter={() => setHotspot("Result", "The output value.")}>
              <div className="text-[8px] font-black text-emerald-400 uppercase">Return</div>
              <div className="p-2 bg-emerald-600 rounded text-xs text-white font-bold">Sum</div>
           </div>
        </div>
      ));

    case 'list-indices':
      return renderVisualArea("Array Map", "Ordered sequential storage.", (
        <div className="flex justify-center gap-2 w-full">
           {['[0]', '[1]', '[2]'].map((v, i) => (
             <div key={i} className="flex flex-col items-center gap-2" onMouseEnter={() => setHotspot(`Index ${v}`, "Standard list positioning.")}>
                <span className="text-[8px] font-black text-slate-600">{v}</span>
                <div className="w-16 h-16 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-blue-400 font-bold">Data</div>
             </div>
           ))}
        </div>
      ));

    case 'loop-iter':
      return renderVisualArea("Cyclical Task", "Repeating a block of code across a collection.", (
        <div className="relative w-40 h-40 border-4 border-dashed border-slate-800 rounded-full flex items-center justify-center mx-auto">
           <RotateCw className="text-blue-500 animate-spin-slow absolute top-0" size={24} />
           <div className="flex gap-2">
              <div className="w-8 h-8 bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-[10px] text-white">Item</div>
           </div>
        </div>
      ));

    case 'dict-map':
      return renderVisualArea("Hash Table", "Direct lookup via unique keys.", (
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto">
           {['"Name"', '"Role"'].map((k, i) => (
             <React.Fragment key={i}>
                <div className="text-right text-[10px] font-mono text-blue-400">{k}:</div>
                <div className="text-left text-[10px] font-mono text-white p-1 bg-slate-900 rounded border border-slate-800">"Guest"</div>
             </React.Fragment>
           ))}
        </div>
      ));

    case 'import-lib':
      return renderVisualArea("Modularity", "Extending core capabilities with specialized modules.", (
        <div className="flex items-center justify-center gap-8 w-full">
           <Code className="text-slate-600" size={32} />
           <Zap className="text-blue-500 animate-pulse" size={24} />
           <div className="p-4 bg-blue-600 rounded-2xl shadow-xl flex flex-col items-center gap-1">
              <Package size={24} className="text-white" />
              <span className="text-[8px] font-mono text-white uppercase font-bold">math.so</span>
           </div>
        </div>
      ));

    case 'decision-tree':
      return renderVisualArea("Boolean Logic", "Hierarchical data splitting.", (
        <div className="flex flex-col items-center gap-6 w-full">
           <div className="w-32 h-10 bg-blue-600 rounded-lg border border-blue-400 flex items-center justify-center text-[10px] text-white font-black uppercase">Feature > X?</div>
           <div className="flex gap-12">
              <div className="w-20 h-8 bg-slate-900 rounded border border-slate-800 flex items-center justify-center text-[8px] text-rose-500 uppercase">False</div>
              <div className="w-20 h-8 bg-slate-900 rounded border border-slate-800 flex items-center justify-center text-[8px] text-emerald-500 uppercase">True</div>
           </div>
        </div>
      ));

    case 'loss-curves':
      return renderVisualArea("Error Convergence", "Tracking model performance improvements over time.", (
        <div className="w-full h-40 border-l-2 border-b-2 border-slate-800 relative mx-auto max-w-[400px]">
           <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M 0 50 Q 100 150, 200 180 T 400 190" fill="none" stroke="#3b82f6" strokeWidth="4" />
              <path d="M 0 60 Q 100 160, 200 185 T 400 120" fill="none" stroke="#f43f5e" strokeWidth="4" strokeDasharray="8,4" />
           </svg>
           <div className="absolute top-0 right-0 p-2 text-[8px] font-black text-emerald-500 uppercase">Optimal Convergence</div>
        </div>
      ));

    case 'overfitting':
      return renderVisualArea("Complexity Balance", "Matching model capacity to data patterns.", (
        <div className="grid grid-cols-2 gap-8 w-full items-center">
           <div className="p-4 bg-slate-900/50 rounded-xl border border-blue-500/20 text-center">
              <span className="text-[8px] font-black text-blue-500 uppercase">Robust</span>
              <div className="h-20 w-full flex items-center justify-center"><TrendingDown className="text-blue-500/30" size={32} /></div>
           </div>
           <div className="p-4 bg-slate-900/50 rounded-xl border border-rose-500/20 text-center opacity-40">
              <span className="text-[8px] font-black text-rose-500 uppercase">Overfit</span>
              <div className="h-20 w-full flex items-center justify-center"><Activity className="text-rose-500/30" size={32} /></div>
           </div>
        </div>
      ));

    case 'neuron':
      return renderVisualArea("Synthetic Cell", "Mathematical simulation of a biological neuron.", (
        <div className="flex items-center justify-center gap-10 w-full">
           <div className="flex flex-col gap-2">
              {[1, 2].map(i => <div key={i} className="w-8 h-px bg-blue-500/50" />)}
           </div>
           <div className="w-20 h-20 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-3xl font-black italic text-blue-500">Σ</span>
           </div>
           <ArrowRight className="text-rose-500" />
           <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center text-xs text-white font-bold">Firing</div>
        </div>
      ));

    default:
      return null;
  }
};

const X: React.FC<{className?: string, size?: number}> = ({className, size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Activity: React.FC<{className?: string, size?: number}> = ({className, size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

export default Visuals;
