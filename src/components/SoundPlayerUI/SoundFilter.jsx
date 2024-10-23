import React from "react";

const SoundFilter = () => {
  return (
    <section className="py-5 container mx-auto px-3 sm:px-10 text-white">
      <div className="container mx-auto flex gap-3 md:justify-between items-center w-full overflow-x-auto">
        <button className="bg-purple-dozewell-accent text-white py-4 px-6 rounded-xl w-full ">
          All
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Noise
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Waves
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Meditations
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          ASMR
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Stories
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Nature
        </button>
        <button className="border border-white text-white py-4 px-8 rounded-xl w-full  ">
          Soundscape
        </button>
      </div>
    </section>
  );
};

export default SoundFilter;
