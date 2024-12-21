import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "Where I've worked",
  experiences: [
    {
      company: 'Goldman Sachs',
      companyUrl: 'https://www.goldmansachs.com/',
      role: 'software analyst',
      started: 'july 2023',
      upto: 'july 2024',
      tasks: [
        'Validated and monitored software controls that mitigate risks surrounding different asset classes (specifically Forex and Commodities) within electronic trading.',
        'Created and monitored multiple internal tracking and governance tools to facilitate the validation of controls that mitigate critical and common risks.',
        'Conversed and negotiated with several business activity owners to rectify any risky gaps with their systems.',
      ],
    },
    {
      company: 'Goldman Sachs - Internship',
      companyUrl: 'https://www.goldmansachs.com/',
      role: 'Summer Analyst',
      started: 'July 2022',
      upto: 'August 2022',
      tasks: [
        'Developed an observation tool to track and handle potential risks faced by the organization during electronic trading.',
        'Collaborated with cross-functional teams to implement risk management features.',
        'Worked with real-time data to create visualizations for identifying trading anomalies.',
      ],
    },

    {
      company: 'Neumeric Tech Corps',
      companyUrl: 'https://ntc-us.com/',
      role: 'Software Development Intern',
      started: 'June 2021',
      upto: 'September 2021',
      tasks: [
        'Contributed to web technology sites as a designer and backend developer using HTML, CSS, PHP, WordPress, and JavaScript.',
        'Collaborated with team members to enhance site functionality and user experience.',
        'Improved site performance through backend optimizations.',
      ],
    },
    {
      company: 'The Apache Software Foundation',
      companyUrl: 'https://www.apache.org/',
      role: 'Open Source Developer Intern',
      started: 'June 2020',
      upto: 'July 2020',
      tasks: [
        'Documented and contributed to the open-source community.',
        'Familiarized with GitHub workflows, including pull requests and issue tracking.',
        'Contributed to various open-source projects, improving functionality and performance.',
      ],
    },
  ],
};
