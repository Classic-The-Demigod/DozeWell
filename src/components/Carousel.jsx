import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Slide1 from "../assets/Slide1.png"
import Slide2 from "../assets/Slide2.png"

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla2" ref={emblaRef}>
      <div className="embla__container2">
        <div className="embla__slide2">
          <img src={Slide1} className="sm:w-[500px] w-[400px]" alt="" />
        </div>
        <div className="embla__slide2">
          <img src={Slide2} className="sm:w-[500px] w-[400px]" alt="" />
        </div>
      </div>
    </div>
  );
}
