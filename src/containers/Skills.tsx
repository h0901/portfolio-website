'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center text-4xl font-semibold mb-12">{title}</h2>

      <div className="space-y-16">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <div
            key={id}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <Skill
              className="flex-1"
              lottie={lottie[isDarkMode ? 'dark' : 'light']}
              skills={softwareSkills}
              points={points}
              title={title}
              {...getSectionAnimation}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
