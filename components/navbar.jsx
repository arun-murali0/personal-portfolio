import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className='flex justify-between items-center mb-32 z-50 sticky'>
      <div className='text-2xl max-sm:text-base'>
        <Link href='/'>Arun.dev</Link>
      </div>
      <div className='flex justify-center items-center gap-5 text-2xl max-sm:text-base'>
        <Link href='https://github.com/arun-murali0'>
          <FaGithub />
        </Link>
        <Link href='https://www.linkedin.com/in/arun--murali/'>
          <FaLinkedin />
        </Link>
        <Link href='https://twitter.com/@arun0896'>
          <FaTwitter />
        </Link>
      </div>
    </nav>
  );
}
