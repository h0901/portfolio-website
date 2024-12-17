import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'huma hussain.',
  tagline: 'I build seamless full-stack solutions for the web.',
  description:
    'I am a passionate Full-Stack Developer with hands-on experience in building scalable web applications using React.js, Node.js, and MongoDB, along with expertise in developing machine learning solutions in Python to solve real-world problems.',
  specialText: 'Currently available for hiring',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
