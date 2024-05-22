import Project from '@/components/project';
import { ProjectProps, experience } from '@/lib/data';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
const Projects = () => {
  return (
    <div className='  mb-4 flex w-full flex-col items-center justify-center gap-y-4 overflow-visible'>
      {experience.map(({ title, projects }: ProjectProps) => (
        <>
          <h2 className='sticky dark:text-grayName'>{title}</h2>
          <div
            key={title}
            className='custom_thumb group flex w-full  snap-x snap-mandatory scroll-m-6 scroll-p-6 flex-row gap-x-6 overflow-x-auto'
          >
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>

          {/* <CarouselPlugin key={title} projects={projects} /> */}
        </>
      ))}
    </div>
  );
};

export default Projects;

export function CarouselPlugin({ projects }: { projects: ProjectProps[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-xs'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>


            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
