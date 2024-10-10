import { sliderData } from "../data/data";
import video from "../assets/video.png";
import Slider from "./Slider";
import Comments from "./Comments";

const DisocverySection = () => {
  return (
    <section className="bg-[#0A1334] py-20 text-white container mx-auto px-10">
      <div className="space-y-4">
        <h1 className="text-xl font-bold">
          Discover the Secret to a Restful Night Why DozeWell Is Your Best
          Choice
        </h1>

        <p className="font-light">
          Our app uses cutting-edge technology to track and analyze your sleep
          patterns, offering insights and recommendations based on real data.
        </p>
      </div>

      <div>
        <Slider slides={sliderData} />
      </div>

      {/* Video Section */}
      <section className="md:py-20 py-10">
        <h1 className="md:text-xl text-base md:w-3/5">
          Achieve better sleep and a healthier lifestyle with our app. Start
          your journey to restful nights and vibrant days today.
        </h1>

        <main className="pt-6 flex flex-col sm:flex-row gap-10 items-center">
          <img src={video} className="flex-1 " alt="" />

          <div className="flex-1 space-y-6">
            <h1 className="font-bold">
              Optimize Your Sleep with Smart Tracking
            </h1>
            <p className="text-sm leading-loose">
              A sleep management app tracks your sleep patterns using sensors or
              wearable devices, analyzes the data to provide personalized
              insights and reports, offers tips and relaxation aids like white
              noise or meditations, and integrates with other devices to help
              you improve your sleep quality and achieve your sleep goals.
            </p>
            <button className="bg-purple-dozewell text-white px-3 py-2 rounded-md">
              How it works
            </button>
          </div>
        </main>
      </section>

      {/* Comments Section */}

     
    </section>
  );
};

export default DisocverySection;
