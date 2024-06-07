import { FaJsSquare, FaNode, FaJava } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaGolang } from 'react-icons/fa6';
import { SiMongodb, SiRedis } from 'react-icons/si';
import { PiFileSqlLight } from 'react-icons/pi';
import { GrGraphQl } from 'react-icons/gr';

const Skills = () => {
  return (
    <div className='my-10'>
      <h2 className='text-[#f0ecec] text-lg md:text-2xl text-center mb-5 font-semibold'>
        Skills
      </h2>

      <div className='w-full h-full py-5 flex gap-5 justify-evenly overflow-x-auto scroll-smooth no-scrollbar text-[#3a43b9] '>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <FaJsSquare size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <SiTypescript size={30} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <FaNode size={36} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <TbBrandNextjs size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <FaGolang size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <FaJava size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <SiMongodb size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <PiFileSqlLight size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <GrGraphQl size={34} />
        </div>
        <div className=' bg-[#8a87873d] rounded-lg p-3 w-[60px] h-[60px]'>
          <SiRedis size={34} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
