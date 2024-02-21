import LandingNavBar from "@/components/LandingNavBar";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-screen p-0 overflow-hidden relative">
        <div className="w-full h-full relative overflow-hidden">
          <div className="w-full h-full relative">
            <div className="absolute w-full h-screen bg-emerald-900 opacity-30"></div>
            <img
              className="w-full h-full object-cover"
              src="https://cdna.artstation.com/p/assets/images/images/040/174/900/large/fabian-geyer-wideshotright.jpg?1628083532"
            />
            
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full custom-gradient">
              <LandingNavBar />
              <div className="flex flex-col items-center w-full px-8 py-10 lg:py-1 text-center">
                  <h1 className=" text-[80px] mb-8 text-white/90 font-extrabold shadow-xl">
                    <span className="text-emerald-400/90">Getting</span> your car repaired
                  </h1>
                  <p className=" mb-10  text-[30px] text-white/90">
                    Has never been <span className="text-emerald-400/90 font-extrabold text-[40px]">EASIER</span>
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Home
