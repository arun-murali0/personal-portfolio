export default function about() {
  return (
    <section className='py-16  border-b border-neutral-800 pb-20'>
      <div className='text-2xl text-center mb-10'>About Me</div>
      <div className='text-lg max-sm:text-base'>
        <div className='mb-6'>
          <span className='uppercase text-neutral-500'>
            💡 Foundation in MERN Stack:
          </span>
          I have invested significant time and effort into mastering the MERN
          stack, recognizing its importance in modern web development.
        </div>
        <div className='mb-6'>
          <span className='uppercase text-neutral-500'>
            🔧 Keen Interest in Server Configuration:
          </span>
          While I may be new to configuring servers, I am excited to explore
          tools like Nginx to optimize server performance and enhance
          application deployment.
        </div>
        <div className='mb-6 '>
          <span className='uppercase text-neutral-500'>
            🐳 Curiosity about Docker:
          </span>
          Docker is potential for streamlining development workflows and
          improving application scalability has piqued my interest, and I am
          enthusiastic about delving into containerization practices.
        </div>
        <div className='mb-6 '>
          <span className='uppercase text-neutral-500'>
            ⚙️ Embracing Unit Testing:
          </span>{" "}
          While I am still building my expertise in unit testing, I understand
          its importance in ensuring code reliability and functionality, and I
          am eager to learn and apply testing methodologies, starting with Jest.
        </div>
      </div>
    </section>
  );
}
