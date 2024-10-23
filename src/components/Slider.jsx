import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../data/data";

const Slider = ({ slides }) => {
  return (
    <section className="py-10">
      <Carousel responsive={responsive}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="bg-purple-dark-dozewell text-white flex flex-col gap-8 items-start px-4 py-4 mr-4 h-full"
          >
            <h1 className="font-bold">{slide.title}</h1>
            <p>{slide.body}</p>
            <button className="bg-purple-dozewell text-white px-3 py-2 rounded-md">
              Learn more ..
            </button>{" "}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// const Slider = ({slides}) => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSlideChange={() => console.log("slide change")}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i}>
//             <div className="bg-purple-dark-dozewell text-white flex flex-col gap-8 items-start px-8 py-4">
//                 <h1 className="font-bold">{slide.title}</h1>
//                 <p>{slide.body}</p>
//                 <button className="bg-purple-dozewell text-white px-3 py-2 rounded-md">Learn more ..</button>
//             </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Slider;
