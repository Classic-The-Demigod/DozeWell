import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { commentsData, responsive } from "../data/data";

const CommentSlider = () => {
  return (
    <section className="py-10 px-8">
      <Carousel responsive={responsive} showDots={true} arrows={false}>
        {commentsData.map((slide, i) => (
          <div
            key={i}
            className="bg-purple-dark-dozewell text-white flex h-full flex-col gap-8 items-start px-4 py-4 mr-4"
          >
            <h1 className="font-bold">{slide.title}</h1>
            <p className="font-light">{slide.body}</p>
            <div children className="flex gap-4 items-center">
              <img src={slide.image} alt="" />
              <p className="text-base font-bold">{slide.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CommentSlider;
