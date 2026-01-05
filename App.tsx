
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CodeCell from './components/CodeCell';
import Visuals from './components/Visuals';
import { COURSES } from './constants';
import { ChevronRight, ChevronLeft, BookOpen, Code, GraduationCap, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [currentCourseId, setCurrentCourseId] = useState('intro');
  const [currentLessonId, setCurrentLessonId] = useState('printing-arithmetic');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const currentCourse = COURSES.find(c => c.id === currentCourseId) || COURSES[0];
  const lessonIndex = currentCourse.lessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = currentCourse.lessons[lessonIndex] || currentCourse.lessons[0];

  const handleSelectLesson = (courseId: string, lessonId: string) => {
    setCurrentCourseId(courseId);
    setCurrentLessonId(lessonId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLessonSuccess = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons(prev => [...prev, currentLesson.id]);
    }
  };

  const goToNext = () => {
    if (lessonIndex < currentCourse.lessons.length - 1) {
      setCurrentLessonId(currentCourse.lessons[lessonIndex + 1].id);
    } else {
      const nextCourseIndex = COURSES.findIndex(c => c.id === currentCourseId) + 1;
      if (nextCourseIndex < COURSES.length) {
        const nextCourse = COURSES[nextCourseIndex];
        setCurrentCourseId(nextCourse.id);
        setCurrentLessonId(nextCourse.lessons[0].id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrev = () => {
    if (lessonIndex > 0) {
      setCurrentLessonId(currentCourse.lessons[lessonIndex - 1].id);
    } else {
      const prevCourseIndex = COURSES.findIndex(c => c.id === currentCourseId) - 1;
      if (prevCourseIndex >= 0) {
        const prevCourse = COURSES[prevCourseIndex];
        setCurrentCourseId(prevCourse.id);
        setCurrentLessonId(prevCourse.lessons[prevCourse.lessons.length - 1].id);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-white selection:bg-indigo-500/30 selection:text-indigo-900">
      <Sidebar 
        currentCourseId={currentCourseId} 
        currentLessonId={currentLessonId} 
        onSelectLesson={handleSelectLesson}
        completedLessons={completedLessons}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Dashboard Navigation Bar */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-12 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.1em] shadow-sm">
              <Zap size={12} className="text-blue-400 fill-blue-400" />
              {currentCourse.title}
            </div>
            <div className="w-px h-4 bg-slate-200" />
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{currentLesson.title}</h2>
          </div>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#009fe3]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#041c5c]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#e00010]" />
          </div>
        </div>

        {/* Massive Centered Reading Experience */}
        <div className="w-full max-w-[1000px] mx-auto py-16 px-8">
          <article className="w-full">
            <header className="mb-12 flex flex-col items-start">
              <div className="flex items-center gap-2 text-blue-600 mb-3 font-bold uppercase tracking-[0.2em] text-[10px]">
                <BookOpen size={14} />
                <span>Phase {lessonIndex + 1}</span>
              </div>
              <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-6 italic uppercase leading-none">
                {currentLesson.title}
              </h1>
              <div className="flex gap-1">
                 <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                 <div className="h-1 w-2 bg-slate-200 rounded-full"></div>
              </div>
            </header>

            {/* Visual Anchor for the Lesson */}
            <div className="mb-12">
               <Visuals id={currentLesson.visualId} />
            </div>

            {/* Content Body with Superior Formatting and Tight Spacing */}
            <div className="space-y-4">
              {currentLesson.content.split('\n').map((para, i) => {
                if (!para.trim()) return null;
                
                const isHeading = /^[0-9]+️⃣|^✅/.test(para);
                if (isHeading) {
                  return (
                    <div key={i} className="pt-6 group">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="flex-shrink-0 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-lg font-black italic shadow-lg group-hover:bg-blue-600 transition-colors">
                            {para.match(/^[0-9]+|✅/)?.[0]}
                         </div>
                         <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">
                           {para.replace(/^[0-9]+️⃣|^✅\s*/, '')}
                         </h3>
                      </div>
                    </div>
                  );
                }

                const isListItem = para.trim().startsWith('•') || para.trim().startsWith('-');
                if (isListItem) {
                  return (
                    <div key={i} className="flex items-center gap-4 ml-6 mb-1 bg-slate-50/50 px-5 py-2.5 rounded-xl border-l-4 border-blue-500/30 hover:border-blue-500 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <p className="text-lg font-semibold m-0 text-slate-700 leading-snug">{para.replace(/^[•-]\s*/, '')}</p>
                    </div>
                  );
                }

                return (
                  <p key={i} className="text-lg leading-relaxed text-slate-600 font-medium tracking-tight px-2 mb-2">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Code Performance Section */}
            {currentLesson.tasks && currentLesson.tasks.length > 0 && (
              <section className="mt-20 relative group">
                <div className="absolute -top-3.5 left-6 px-3 py-1 bg-[#e00010] text-white font-black italic uppercase text-[8px] tracking-[0.2em] shadow-lg rounded-sm z-10 transition-transform group-hover:-translate-y-0.5">
                   Performance Lab
                </div>
                
                <div className="bg-[#0f172a] rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                        <Code size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white italic uppercase tracking-tight leading-none">M-Code Interface</h3>
                        <p className="text-slate-500 text-[8px] font-bold uppercase tracking-widest mt-1 opacity-50">Multi-Task Protocol Active</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
                       <div className="w-0.5 h-3 bg-[#009fe3]" />
                       <div className="w-0.5 h-3 bg-[#041c5c]" />
                       <div className="w-0.5 h-3 bg-[#e00010]" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <CodeCell 
                      tasks={currentLesson.tasks} 
                      onLessonComplete={handleLessonSuccess}
                    />
                  </div>
                </div>
              </section>
            )}
          </article>

          {/* High-Octane Navigation */}
          <footer className="mt-24 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 pt-10">
            <button
              onClick={goToPrev}
              disabled={lessonIndex === 0 && currentCourseId === COURSES[0].id}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl border border-slate-200 text-slate-400 font-bold italic uppercase tracking-widest text-[10px] hover:bg-slate-50 hover:text-slate-900 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Reverse Gear
            </button>
            <button
              onClick={goToNext}
              className={`w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-black italic uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 group ${
                completedLessons.includes(currentLesson.id) 
                ? 'bg-[#e00010] text-white hover:bg-red-700 hover:scale-[1.02] shadow-red-500/10' 
                : 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50'
              }`}
              disabled={!completedLessons.includes(currentLesson.id)}
            >
              {completedLessons.includes(currentLesson.id) ? 'Next Phase' : 'Complete All Tasks to Advance'}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
