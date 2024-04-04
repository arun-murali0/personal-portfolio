import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import arun from "@/public/images/arun.jpg";

export default function hero() {
  const word = [{ text: "Arun" }, { text: "Murali" }];

  return (
    <hero className='grid grid-cols-2 max-sm:grid max-sm:grid-cols-1 border-neutral-900'>
      <div>
        <div className='text-6xl font-thin pb-10 max-sm:pb-2 max-sm:text-3xl'>
          <TypewriterEffect words={word} />
        </div>
        <p className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500  text-transparent bg-clip-text text-4xl pb-3 max-sm:text-2xl mb-10'>
          Full stack Developer
        </p>
        <p className='text-lg max-sm:text-base my-5'>
          I am Arun , a passionate Full Stack Developer specializing in the MERN
          stack. With a deep understanding of both front-end and back-end
          technologies, I craft robust and scalable web applications that
          deliver exceptional user experiences.
        </p>
      </div>
      <div className='z-50 grid justify-end'>
        <Image
          className='shadow-md shadow-neutral-400 rounded-md '
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
