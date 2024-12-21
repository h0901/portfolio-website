import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, Prisma etc.',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development',
        'Integrating databases using Prisma and MongoDB',
        'Implementing state management with Redux',
      ],
      softwareSkills: [
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'Sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'React.js', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
        { name: 'Redux', icon: 'logos:redux' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'GraphQL', icon: 'logos:graphql' },
        { name: 'Docker', icon: 'logos:docker' },
      ],
    },
    {
      id: getId(),
      title: 'Machine Learning',
      lottie: {
        light: '/lotties/ml.json',
        dark: '/lotties/ml-dark.json',
      },
      points: [
        'Experience in building machine learning models using Python',
        'Hands-on experience with TensorFlow and PyTorch for deep learning',
        'Proficient in data preprocessing, feature engineering, and model evaluation',
        'Worked on real-world ML problems like classification, regression, and NLP',
      ],
      softwareSkills: [
        { name: 'Python', icon: 'logos:python' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'PyTorch', icon: 'logos:pytorch' },
        { name: 'Pandas', icon: 'logos:pandas' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Jupyter', icon: 'logos:jupyter' },
        { name: 'Matplotlib', icon: 'logos:matplotlib' },
        { name: 'Seaborn', icon: 'logos:seaborn' },
      ],
    },
  ],
};
