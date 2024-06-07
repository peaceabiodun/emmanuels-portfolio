import FoodCourt from '../assets/images/foodcourt.jpg';
import Pario from '../assets/images/pario.jpg';
import Hng from '../assets/images/hng.jpg';

export const projects = [
  {
    id: 1,
    image: FoodCourt,
    title: 'FoodCourt',
    role: 'Backend Engineer',
    link: 'https://www.getfoodcourt.com/',
    description:
      'Develop, maintain, and optimize microservices using Node.js, Nest.js, and TypeScript...',
  },
  {
    id: 2,
    image: Pario,
    title: 'Pario Solutions',
    role: 'Backend Engineer',
    link: 'https://www.pariosolutions.com.au/',
    description:
      'Successfully designed and developed custom backend APIs tailored to meet clients specific requirements and business needs using Node.js, Express.js TypeScript, PostgreSQL,MongoDB, Redis, Cron Jobs',
  },
  {
    id: 3,
    image: Hng,
    title: 'HNG Internship',
    role: 'Backend Engineer',
    link: 'https://hng.tech/',
    description:
      'Wrote comprehensive unit and integration tests to guarantee the reliability and stability of backend services...',
  },
];
const Projects = () => {
  return (
    <div
      id='projects'
      className='mb-10 border-y-2 border-[#222769] p-5 sm:p-10'
    >
      <h2 className='text-[#f0ecec] text-lg md:text-2xl text-center mb-3 font-semibold'>
        Projects
      </h2>
      <p className='text-[#bdb9b9] text-center font-medium text-sm mb-5'>
        Projects I have Worked On
      </p>
      <div className=' h-full gap-5 w-full flex lg:grid lg:grid-cols-3 overflow-x-auto scroll-smooth no-scrollbar '>
        {projects.map((item) => (
          <div
            key={item.id}
            className='p-4 bg-[#cfc1c13d] w-[350px] min-w-[350px] min-h-[370px] rounded-xl overflow-hidden'
          >
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <p className='text-[#f0ecec] text-lg font-semibold mb-3=2'>
                {item.title}
              </p>
              <p className='text-[#f0ecec] text-sm font-semibold mb-3'>
                {item.role}
              </p>
              <div>
                <img
                  src={item.image}
                  alt='project'
                  className='w-full h-[200px] object-cover rounded-xl brightness-75'
                />
              </div>
              <p className='text-[#faeefe] text-sm font-medium my-3'>
                {item.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
