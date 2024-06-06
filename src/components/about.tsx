const About = () => {
  return (
    <div className='px-5 sm:p-10 border-y-2 border-[#222769] flex flex-col items-center justify-center '>
      <h2 className='text-[#f0ecec] text-lg md:text-2xl mt-4'>
        Emmanuel Braboke
      </h2>
      <p className='text-[#d6d0d0] text-sm md:text-lg my-6 max-w-[550px] text-center '>
        Over the past few years, I have built alot of backend infrastructures
        blah blah blah
      </p>
      <div className='text-[#d6d0d0] text-sm md:text-lg text-center'>
        <p>Click to check out my blog posts and learn more about me</p>
        <a href='https://dev.to/emmabraboke'>
          <button className='bg-[#8a87873d] p-2 rounded-xl text-white w-[120px] text-sm mt-3 h-[46px] font-medium '>
            Blog
          </button>
        </a>
      </div>
      <p className='text-white text-5xl'>. . .</p>
    </div>
  );
};

export default About;
