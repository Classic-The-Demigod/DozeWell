import desktopPlayer from "../assets/desktop-player.png";
import mobilePlayer from "../assets/mobile-player.png";
import Box from "../assets/box.png";
import Check from "../assets/check.png";
import { pricePlan } from "../data/data";

const Subscription = () => {
  return (
    <section className="text-white  px-6 py-10 sm:px-20 sm:py-24">
      <img src={desktopPlayer} className="md:block hidden" alt="" />
      <img src={mobilePlayer} className="md:hidden" alt="" />

      <main className="py-10  sm:py-24">
        <div className="space-y-4">
          <h1 className="font-bold text-lg md:text-2xl ">Subscription</h1>
          <p className="text-base font-light">Never miss a good night sleep</p>
        </div>
        {/* Price Plan Wrapper */}
        <div className="py-8 flex md:flex-row flex-col justify-center gap-8 items-center">
          {/* Price Plan Card 1 */}
          <div className="px-4 py-6 bg-dozewell-gradient rounded-3xl flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-4">
              <img src={Box} alt="" />
              <div>
                <h2>Free Plan (Basic)</h2>
                <p>Price: $0/month</p>
              </div>
            </div>
            <div className="space-y-4">
              {pricePlan.slice(0, 5).map((plan, i) => (
                <div key={i} className="flex gap-4 items-center text-white">
                  <img src={Check} alt="" />
                  <p className="font-medium text-base">{plan.text}</p>
                </div>
              ))}
            </div>

            <button className="bg-purple-dark-dozewell py-4 rounded-lg">
              Sign Up for free
            </button>
          </div>
          {/* Price Plan Card 2 */}
          <div className="px-4 py-6 bg-dozewell-gradient rounded-3xl flex flex-col gap-10 flex-1">
            <div className="flex items-center gap-4">
              <img src={Box} alt="" />
              <div>
                <h2>Free Plan (Basic)</h2>
                <p>Price: $0/month</p>
              </div>
            </div>
            <div className="space-y-4">
              {pricePlan.slice(5, 11).map((plan, i) => (
                <div key={i} className="flex gap-4 items-center text-white">
                  <img src={Check} alt="" />
                  <p className="font-medium text-base">{plan.text}</p>
                </div>
              ))}
            </div>

            <button className="bg-purple-dark-dozewell py-4 rounded-lg">
              Sign Up for free
            </button>
          </div>
          <div className="px-4 py-6 bg-dozewell-gradient rounded-3xl flex flex-col gap-6 flex-1">
            <div className="flex items-center gap-4">
              <img src={Box} alt="" />
              <div>
                <h2>Free Plan (Basic)</h2>
                <p>Price: $0/month</p>
              </div>
            </div>
            <div className="space-y-4">
              {pricePlan.slice(11, 18).map((plan, i) => (
                <div key={i} className="flex gap-4 items-center text-white">
                  <img src={Check} alt="" />
                  <p className="font-medium text-base">{plan.text}</p>
                </div>
              ))}
            </div>

            <button className="bg-purple-dark-dozewell py-4 rounded-lg">
              Sign Up for free
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Subscription;
