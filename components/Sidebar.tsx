
import React from 'react';
import { COURSES } from '../constants';
import { Terminal, Brain, Cpu, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

interface SidebarProps {
  currentCourseId: string;
  currentLessonId: string;
  onSelectLesson: (courseId: string, lessonId: string) => void;
  completedLessons: string[];
}

const IconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={14} />,
  Brain: <Brain size={14} />,
  Cpu: <Cpu size={14} />,
};

const Sidebar: React.FC<SidebarProps> = ({ 
  currentCourseId, 
  currentLessonId, 
  onSelectLesson,
  completedLessons 
}) => {
  return (
    <div className="w-80 h-screen bg-[#0a0f1e] border-r border-slate-800 overflow-y-auto flex flex-col sticky top-0 shrink-0">
      <div className="p-8 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex gap-0.5">
            <div className="w-1.5 h-6 bg-[#009fe3]" />
            <div className="w-1.5 h-6 bg-[#041c5c]" />
            <div className="w-1.5 h-6 bg-[#e00010]" />
          </div>
          <h1 className="text-2xl font-black text-white italic tracking-tighter">
            M<span className="text-slate-400">-</span>POWER
          </h1>
        </div>
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">AI Performance Academy</p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-8">
        {COURSES.map((course) => (
          <div key={course.id} className="space-y-3">
            <div className="flex items-center gap-2 px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest border-l-2 border-slate-800">
              {IconMap[course.icon]}
              {course.title}
            </div>
            <div className="space-y-1">
              {course.lessons.map((lesson) => {
                const isActive = currentCourseId === course.id && currentLessonId === lesson.id;
                const isCompleted = completedLessons.includes(lesson.id);
                
                return (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(course.id, lesson.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-[13px] transition-all flex items-center justify-between group relative overflow-hidden
                      ${isActive 
                        ? 'bg-slate-800 text-white font-black shadow-xl ring-1 ring-slate-700' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                  >
                    {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e00010]" />}
                    <span className="flex items-center gap-3 relative z-10">
                      {isCompleted ? (
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      ) : (isActive ? <Zap size={14} className="text-blue-400 fill-blue-400" /> : <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />)}
                      <span className="line-clamp-1">{lesson.title}</span>
                    </span>
                    <ChevronRight size={14} className={`shrink-0 opacity-0 group-hover:opacity-100 transition-all ${isActive ? 'opacity-100 translate-x-0' : '-translate-x-2'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
