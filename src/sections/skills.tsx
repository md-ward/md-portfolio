import { skills } from '@/lib/data';
import Image from 'next/image';
type skillType = {
  title: string;
  img: string;
};

const SkillCard = ({ skill }: { skill: skillType }) => {
  return (
    <div className='   flex-grow-[0.5]  flex-shrink-0 !dark:text-darkCol flex  flex-col items-center  justify-between rounded-lg   bg-white p-4 text-center  text-grayName shadow-md '>
      {/* Placeholder for image */}
      <Image
        src={skill.img}
        alt={skill.title}
        width={96}
        height={96}
        className='flex-[3] object-contain'
      />
      <h3 className='flex-1 break-words text-lg font-bold'>{skill.title}</h3>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id='skills'
      className=' flex w-full flex-col gap-y-44 '
    >
      <span className='flex w-full items-center justify-evenly gap-4 text-darkCol dark:text-grayName  '>
        <h1 className='relative'> Skills</h1>
        <span className='h-1 w-full bg-darkCol dark:bg-grayName '></span>
      </span>

      <div className='flex w-full flex-col items-start justify-start gap-4 flex-wrap'>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div
            key={category}
            className='flex w-full flex-col items-center justify-between sm:flex-row '
          >
            <h2 className='mb-2 text-lg font-bold dark:text-lightCol'>{category}</h2>
            <div className='flex flex-row gap-4 flex-wrap justify-center  '>
              {skillsList.map((skill) => (
                <SkillCard key={skill.title} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
