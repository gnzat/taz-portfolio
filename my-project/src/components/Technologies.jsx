import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-stone-300 pb-24">
      <h2 className="my-20 text-center text-2xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-stone-300 p-4">
          <RiReactjsLine className="text-7xl text-emerald-900" />
        </div>
        <div className="rounded-2xl border-4 border-stone-300 p-4">
          <TbBrandNextjs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-stone-300 p-4">
          <FaNodeJs className="text-7xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
