"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import arun from "@/public/images/arun.jpg";
import { FaFile } from "react-icons/fa";

export default function hero() {
  const word = [{ text: "Arun" }, { text: "Murali" }];

  return (
    <hero className='grid grid-cols-2 max-sm:grid max-sm:grid-cols-1 border-neutral-900'>
      <div>
        <div className='pb-10 text-6xl font-thin max-sm:pb-2 max-sm:text-3xl'>
          <TypewriterEffect words={word} />
        </div>
        <p className='pb-3 mb-10 text-4xl text-transparent bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text max-sm:text-2xl'>
          Full stack Developer
        </p>
        <p className='my-5 text-lg max-sm:text-base'>
          I am Arun , a passionate Full Stack Developer specializing in the MERN
          stack. With a deep understanding of both front-end and back-end
          technologies, I craft robust and scalable web applications that
          deliver exceptional user experiences.
        </p>
        <button
          href=''
          className='text-4xl max-sm:pb-8 max-sm:text-2xl text-neutral-200'
        >
          <FaFile />
        </button>
      </div>
      <div className='z-50 grid justify-end'>
        <Image
          className='rounded-md shadow-md shadow-neutral-400 '
          src={arun}
          alt='arun'
          width={300}
          height={300}
          priority={true}
        />
      </div>
    </hero>
  );
}
