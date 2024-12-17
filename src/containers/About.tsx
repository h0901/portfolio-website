'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary text-3xl md:text-4xl font-semibold mb-8">
        {title}
      </h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-6 lg:w-3/5">
          <p className="text-lg leading-relaxed">
            Hi, my name is Huma Hussain, an MS CS student{' '}
            <Link
              href="https://www.uic.edu/"
              target="_blank"
              className="text-accent font-medium hover:underline"
            >
              University of Illinois at Chicago
            </Link>
            .
          </p>
          <p className="text-lg leading-relaxed">
            I'm a creative writer and enthusiastic full-stack web developer with
            a passion for exploring diverse machine learning models.
          </p>
          <p className="text-lg leading-relaxed">
            My journey led me to work at -{' '}
            <Link
              href="https://www.goldmansachs.com/"
              target="_blank"
              className="text-accent font-medium hover:underline"
            >
              Goldman Sachs
            </Link>
            , where I honed my skills in full-stack development, building and
            maintaining complex web applications, and contributing to
            data-driven solutions at scale.
          </p>
          <p className="text-lg leading-relaxed">
            Right now, I'm focused on exploring new inventions in full-stack
            development while looking for a decent job.
          </p>

          {list && (
            <>
              <p className="text-lg font-medium">{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-2 mt-4 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
