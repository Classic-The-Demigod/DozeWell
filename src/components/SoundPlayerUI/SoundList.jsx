import React from "react";
import { soundList } from "../../data/data";

const SoundList = () => {
  return (
    <section className="py-5 container mx-auto px-3 sm:px-10 text-white">
      <div className="grid grid-cols-3 md:grid-cols-5  gap-2 md:px-8">
        {soundList.map((sound, i) => (
          <div className="space-y-2" key={i}>
            <div className="bg-purple-dozewell-accent px-5 py-4 rounded-md w-20">
              <img className="w-10 h-10" src={sound.image} alt="" />
            </div>
            <h1 className="font-bold text-sm font-primary">{sound.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoundList;
