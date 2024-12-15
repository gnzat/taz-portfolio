// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaFigma } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center font-bold text-2xl"><div className="mx-2 w-10">Taz</div></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* <FaLinkedin />
        <FaGithub />
        <FaFigma /> */}
        <div className="px-2">Experiences</div>
        <div className="px-2">Others</div>
        <div className="px-2">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
