import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <section className="container px-6 py-[4rem] mx-auto bg-hero">
      <div className="flex gap-4  sm:px-20  flex-col items-center sm:flex-row sm:gap-6 ">
        <div className="space-y-4 flex-1">
          <h1 className="text-5xl font-bold text-white">
            Unlock the Power of Restful Sleep
          </h1>
          <p className=" text-white">
            Track, Improve, and Master Your Sleep Patterns
          </p>
        </div>
        <div className="flex-1">
          <ImageSlider />

    
        </div>
      </div>
    </section>
  );
};

export default Hero;
