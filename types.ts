
export enum CourseType {
  INTRO = 'Intro to Programming',
  PYTHON = 'Python for Data Science',
  ML = 'Machine Learning',
  DL = 'Deep Learning'
}

export interface Task {
  id: string;
  description: string;
  initialCode: string;
  instruction: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  tasks: Task[];
  visualId?: 
    | 'arithmetic' 
    | 'variables' 
    | 'decision-tree' 
    | 'loss-curves' 
    | 'overfitting' 
    | 'neuron' 
    | 'signal-noise'
    | 'update-var'
    | 'multi-var'
    | 'debug-typo'
    | 'indentation'
    | 'func-scope'
    | 'list-indices'
    | 'loop-iter'
    | 'dict-map'
    | 'import-lib';
}

export interface Course {
  id: string;
  title: CourseType;
  description: string;
  icon: string;
  lessons: LessonSection[];
}

export interface ExecutionResult {
  output: string;
  isError: boolean;
  explanation?: string;
}
