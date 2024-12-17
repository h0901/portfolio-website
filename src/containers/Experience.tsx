'use client';
import { TabList } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-16 px-6 md:px-12 mx-auto shadow-lg rounded-lg"
      {...getSectionAnimation}
    >
      <h2 className="text-center text-4xl font-semibold mb-8 sm:text-3xl md:text-4xl">
        {experienceSection.title}
      </h2>
      <TabList experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
