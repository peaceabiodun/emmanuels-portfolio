import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import About from '../components/about';
import Skills from '../components/skills';
import Projects from '../components/projects';

const MainPage = () => {
  return (
    <div className='bg-main w-full h-full min-h-screen p-5 sm:p-10'>
      <div className='flex justify-center md:justify-between gap-4'>
        <div className='hidden md:block text-[#f0ecec] text-lg font-semibold'>
          Portfolio
        </div>
        <div className=' flex gap-4 p-3 text-[#f0ecec] bg-[#8d8b8b50] border-2 rounded-xl text-sm font-semibold '>
          <a href='#projects' className='hover:text-[#5962da] cursor-pointer'>
            Projects
          </a>
          <a href='#contact' className='hover:text-[#5962da] cursor-pointer'>
            Contact me
          </a>
        </div>
      </div>

      <div className='h-[80vh] flex flex-col justify-center items-center'>
        <h1 className='text-[#fefefe] font-bold text-4xl md:text-6xl text-center '>
          Hello👋🏽, I'm Emmanuel Braboke
        </h1>
        <h3 className='text-[#bdb9b9] mt-6 text-xl md:text-2xl font-semibold'>
          Backend Engineer
        </h3>

        <div className='text-[#3a43b9] flex gap-5 my-6'>
          <a
            href='https://www.linkedin.com/in/emmanuelbraboke'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <FaLinkedin size={26} className='cursor-pointer' />
          </a>
          <a
            href='mailto:emmabraboke@gmail.com'
            className='bg-[#a19e9e3d] p-2 rounded-full'
          >
            <MdEmail size={26} className='cursor-pointer ' />
          </a>
          <a
            href='https://github.com/emmabraboke'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <FaGithub size={26} className='cursor-pointer' />
          </a>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainPage;
