import { FaReact } from "react-icons/fa";
import { SiDocker, SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { SiJest } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

export default function techonologis() {
  return (
    <div className='pb-24 border-b border-neutral-800'>
      <h1 className='my-16 text-lg text-center'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-5 sm:transition-none'>
        <div className='p-3 transition delay-100 border-4 rounded-2xl border-neutral-800 '>
          <FaReact className='text-4xl text-cyan-500' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <SiNextdotjs className='text-4xl text-white' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <SiTypescript className='text-4xl text-blue-400' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <SiTailwindcss className='text-4xl text-cyan-500' />
        </div>

        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <FaGitSquare className='text-4xl text-red-500' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <FaNodeJs className='text-4xl text-green-800' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 s'>
          <SiExpress className='text-4xl text-white' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 s'>
          <DiMongodb className='text-4xl text-green-500' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 s'>
          <SiDocker className='text-4xl text-blue-500' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <SiJest className='text-4xl text-red-400' />
        </div>
        <div className='p-3 border-4 rounded-2xl border-neutral-800 '>
          <SiRedis className='text-4xl text-red-500' />
        </div>
      </div>
    </div>
  );
}
