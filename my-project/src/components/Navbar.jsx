import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mx-20 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center font-bold text-2xl"><div className="mx-2 w-10">Taz</div></div>
      <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaFigma />
       
      </div>
    </nav>
  );
};

export default Navbar;
