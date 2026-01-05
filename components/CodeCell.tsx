
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Info, Terminal as TerminalIcon, AlertCircle, CheckCircle, ChevronRight, Target } from 'lucide-react';
import { simulateExecution } from '../services/geminiService';
import { ExecutionResult, Task } from '../types';

interface CodeCellProps {
  tasks: Task[];
  onLessonComplete?: () => void;
}

const CodeCell: React.FC<CodeCellProps> = ({ tasks, onLessonComplete }) => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [code, setCode] = useState('');
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showNextTaskButton, setShowNextTaskButton] = useState(false);

  const currentTask = tasks[currentTaskIndex];

  useEffect(() => {
    setCurrentTaskIndex(0);
    setCode(tasks[0]?.initialCode || '');
    setResult(null);
    setShowNextTaskButton(false);
  }, [tasks]);

  const handleRun = async () => {
    setIsExecuting(true);
    setResult(null);
    const executionResult = await simulateExecution(code);
    setResult(executionResult);
    setIsExecuting(false);

    if (!executionResult.isError) {
      if (currentTaskIndex < tasks.length - 1) {
        setShowNextTaskButton(true);
      } else if (onLessonComplete) {
        onLessonComplete();
      }
    }
  };

  const handleNextTask = () => {
    const nextIndex = currentTaskIndex + 1;
    setCurrentTaskIndex(nextIndex);
    setCode(tasks[nextIndex].initialCode);
    setResult(null);
    setShowNextTaskButton(false);
  };

  const handleReset = () => {
    setCode(currentTask.initialCode);
    setResult(null);
    setShowNextTaskButton(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Task Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Target size={20} />
          </div>
          <div>
            <h4 className="text-sm font-black text-white italic uppercase tracking-tight">Active Task</h4>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{currentTask.id}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {tasks.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i < currentTaskIndex ? 'w-4 bg-emerald-500' : 
                i === currentTaskIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-800'
              }`} 
            />
          ))}
          <span className="ml-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            {currentTaskIndex + 1} / {tasks.length}
          </span>
        </div>
      </div>

      {/* Instruction Box */}
      <div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl animate-in fade-in slide-in-from-left-4 duration-500">
        <div className="flex items-start gap-3">
          <Info size={16} className="text-blue-400 mt-1 shrink-0" />
          <p className="text-sm text-blue-100/80 leading-relaxed font-medium">
            {currentTask.instruction}
          </p>
        </div>
      </div>

      {/* Editor Main Container */}
      <div className="border border-slate-700/50 rounded-2xl overflow-hidden bg-[#020617] ring-1 ring-white/5 shadow-2xl">
        <div className="bg-slate-900/50 px-5 py-2.5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 text-slate-500 text-[10px] font-mono font-bold tracking-widest uppercase">
            <TerminalIcon size={12} className="text-blue-400" />
            <span>Python Kernel</span>
          </div>
          <button 
            onClick={handleReset}
            className="p-1 text-slate-500 hover:text-white transition-colors"
            title="Reset code"
          >
            <RotateCcw size={14} />
          </button>
        </div>
        
        <div className="relative group">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-48 p-6 font-mono text-base bg-transparent text-blue-100 focus:outline-none resize-none leading-relaxed selection:bg-blue-500/20"
            placeholder="Write Python code..."
          />
          {!showNextTaskButton && (
            <button
              onClick={handleRun}
              disabled={isExecuting}
              className={`absolute bottom-5 right-6 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg
                ${isExecuting 
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-500 active:scale-95 shadow-blue-900/20'}`}
            >
              {isExecuting ? (
                <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Play size={14} fill="currentColor" />
              )}
              {isExecuting ? 'COMPILING...' : 'ENGAGE'}
            </button>
          )}
          {showNextTaskButton && (
            <button
              onClick={handleNextTask}
              className="absolute bottom-5 right-6 flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 shadow-emerald-900/20 animate-in zoom-in-95 duration-300"
            >
              Next Task
              <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Result Container */}
      {result && (
        <div className={`rounded-2xl overflow-hidden border transition-all duration-300 animate-in fade-in slide-in-from-top-4
          ${result.isError ? 'bg-red-500/5 border-red-500/20' : 'bg-emerald-500/5 border-emerald-500/20'}`}>
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-2">
              {result.isError ? (
                <AlertCircle size={14} className="text-red-500" />
              ) : (
                <CheckCircle size={14} className="text-emerald-500" />
              )}
              <span className={`text-[10px] font-black uppercase tracking-widest ${result.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                {result.isError ? 'System Error' : 'Success'}
              </span>
            </div>

            <pre className={`font-mono text-sm p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 max-h-40 overflow-y-auto
              ${result.isError ? 'text-red-400' : 'text-emerald-400'}`}>
              {result.output || 'No output produced.'}
            </pre>

            {result.explanation && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/30 border border-white/5">
                <Info size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-slate-400 leading-relaxed font-medium italic">
                  {result.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeCell;
