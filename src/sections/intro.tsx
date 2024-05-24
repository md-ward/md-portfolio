export default function IntroSection() {
  return (
    <section
      className='hero dark:text-grayName !items-center !justify-center place-self-center text-darkCol   max-sm:px-3'
      id='home'
    >
      <span className=' w-full  text-2xl    text-danger/80'>
        Hi, my name is
      </span>
      <div className='name'>
        <h2 className='h-lg'>Mohammad Ward.</h2>
        <span className='flex  flex-wrap items-center'>
          <h3 className='h-lg m-2'>Flutter & FullStack -</h3>
          <abbr className='h-lg ' title='MongoDb,Express.js,React.js,Node.js '>
            MERN
          </abbr>
        </span>
      </div>
      <p className='tracking-wider w-full'>
        I&lsquo;m a fresher software engineer
        <span className='text-bold text-danger'>
          {' '}
          Fullstack & Flutter Dev{' '}
        </span>{' '}
        who&lsquo;s thriving to improve himself and kickstart his career
      </p>
    </section>
  );
}
