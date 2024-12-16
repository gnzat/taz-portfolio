// import About from "./About";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="overflow-x-hidden text-emerald-900 antialiased selection:bg-stone-300 selection:text-stone-800 max-h-svh">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Hero />
        {/* <About /> */}
      </div>
    </div>
  );
};

export default Home;
