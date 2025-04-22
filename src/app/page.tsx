import { Svg } from '@/components';

export default function Home() {
  return (
    <div className="bg-white relative px-4 w-full h-full gap-5 items-center justify-center flex">
      <div className='w-full select-none flex-col md:flex-row flex gap-15  items-center justify-center '>
        <Svg src={'blue-logo'} className='w-[10rem] drop-shadow-[0_0px_2px_#5000f9] ' alt='aspect logo' />
        <div className='bg-[#5000f9] h-[8rem] drop-shadow-[0_0px_2px_#5000f9]  rounded-full w-[0.3rem] hidden md:flex'></div>
        <div className='animate-pulse-card max-w-[30rem]  md:max-w-[10rem] text-[#5000f9] drop-shadow-[0_0px_2px_#4f00f9cd] flex items-center justify-center text-center md:text-start font-outfit text-[2rem] font-[500] '>
          Change your aspect, change your perspective.
        </div>
      </div>
    </div>
  );
}
