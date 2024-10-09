import CarouselCards from "./CarouselCards";
const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


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
        {/* <CarouselCards slides={SLIDES} options={OPTIONS} /> */}
      </div>
    </section>
  );
}

export default DisocverySection