"use client";
import Image from "next/image";
import { projectsDetails } from "@/constants/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <div className='pb-16 mt-12 '>
      <h1 className='mb-16 text-lg text-center'>Projects</h1>

      <div>
        {projectsDetails.map((project, index) => {
          return (
            <div
              key={index}
              className='flex items-center justify-center gap-1 pb-4 my-2 border-b border-neutral-800 max-sm:flex-wrap'
            >
              <div className='flex justify-center w-full'>
                <Image
                  className='my-5 bg-auto max-sm:flex max-sm:mx-auto'
                  src={project.image}
                  alt={project.title}
                  height={200}
                  width={200}
                />
              </div>
              <div className='w-full text-center'>
                <p className='pb-2 text-lg max-sm:text-base text-neutral-400'>
                  {project.title}
                </p>
                <p className='max-sm:text-base'>{project.description}</p>
                <div className='flex mt-4 justify-evenly '>
                  {project.technologies.map((tech, index) => {
                    return (
                      <div key={index}>
                        <div className='p-2 border rounded-lg border-neutral-600 max-sm:gap-1 max-sm:flex-wrap max-sm:flex'>
                          {tech}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='mt-2'>
                  {project.url.map((url, index) => (
                    <span key={index} className='flex flex-row justify-center'>
                      {Object.entries(url).map(([key, value]) => (
                        <Link
                          key={key}
                          href={value}
                          target='_blank'
                          className='p-2 text-blue-500 hover:underline max-sm:text-base'
                        >
                          <span>{key}</span>
                        </Link>
                      ))}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
