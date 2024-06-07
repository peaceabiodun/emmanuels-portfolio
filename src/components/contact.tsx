import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div
      id='contact'
      className=' px-5 sm:p-10 flex flex-col items-center justify-center'
    >
      <h2 className='text-[#f0ecec] text-lg md:text-2xl text-center mb-3 font-semibold'>
        Contact Me
      </h2>
      <div className='text-[#3a43b9] flex gap-6 my-6'>
        <a
          href='https://www.linkedin.com/in/emmanuelbraboke'
          className='bg-[#8a87873d] p-2 rounded-full'
        >
          <FaLinkedin size={30} className='cursor-pointer' />
        </a>
        <a
          href='mailto:emmabraboke@gmail.com'
          className='bg-[#a19e9e3d] p-2 rounded-full'
        >
          <MdEmail size={30} className='cursor-pointer ' />
        </a>
        <a
          href='https://github.com/emmabraboke'
          className='bg-[#8a87873d] p-2 rounded-full'
        >
          <FaGithub size={30} className='cursor-pointer' />
        </a>
      </div>
    </div>
  );
};

export default Contact;
