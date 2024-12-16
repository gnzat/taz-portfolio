import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="mt-20 flex items-center justify-between py-6">
      {/* <div className="flex flex-shrink-0 items-center font-bold text-2xl"><div className="mx-2 w-10">Taz</div></div> */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Footer;
