import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/profilePicture.jpg";

const Hero = () => {
  return (
    // <div className="lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-3xl font-thin tracking-tight lg:mt-10 lg:text-4xl">
              Taz Ng Mui Teng
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent">
              Aspiring Front-end Developer & UI/UX Desginer
            </span>
            <p className="my-2 max-w-xl font-light py-4 tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          <div className="flex justify-center">
            <img src={profilePicture} alt="Taz Ng" className="rounded-2xl" width={400} height={400} />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Hero;
