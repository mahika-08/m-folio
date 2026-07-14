/**
 * Skills organized by category.
 * Each skill has a name and an optional proficiency level (1-5).
 */
export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'FiMonitor',
    color: 'from-blue-500/20 to-indigo-500/20',
    accent: '#6366f1',
    skills: [
      { name: 'React', level: 3 },
      { name: 'TypeScript', level: 5 },
      { name: 'Next.js', level: 4 },
      { name: 'Tailwind CSS', level: 5 },
      /*{ name: 'Framer Motion', level: 4 },*/
      /*{ name: 'Redux Toolkit', level: 4 },*/
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'FiServer',
    color: 'from-purple-500/20 to-violet-500/20',
    accent: '#a855f7',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'Python', level: 3 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'FiDatabase',
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: '#10b981',
    skills: [
      { name: 'MySQL', level: 3 },
    ],
  },
  /*{
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'FiCloud',
    color: 'from-sky-500/20 to-cyan-500/20',
    accent: '#0ea5e9',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'Docker', level: 4 },
      { name: 'Kubernetes', level: 3 },
      { name: 'CI/CD (GitHub Actions)', level: 4 },
      { name: 'Terraform', level: 3 },
    ],
  },
  */
  {
    id: 'tools',
    label: 'Tools',
    icon: 'FiTool',
    color: 'from-orange-500/20 to-amber-500/20',
    accent: '#f59e0b',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'VS Code', level: 4 },
      { name: 'Linux', level: 4 },
      { name: 'ChatGPT', level: 4 },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: 'FiCode',
    color: 'from-rose-500/20 to-pink-500/20',
    accent: '#f43f5e',
    skills: [

      { name: 'Python', level: 3 },
      { name: 'SQL', level: 4 },
      { name: 'Java', level: 3 },
    ],
  },
];
