import Project from '@/components/project';
import { ProjectProps, experience } from '@/lib/data';

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
        </>
      ))}
    </div>
  );
};

export default Projects;
