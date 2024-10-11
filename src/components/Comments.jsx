import CommentSlider from "./CommentSlider";


const Comments = () => {
  return (
    <section className="bg-[#0A1334] md:py-20">
      <div className="py-10  text-white container mx-auto px-10 space-y-4">
        <h1 className="md:text-2xl text-base font-bold">
          Join Thousands of Happy Sleepers!
        </h1>
        <p className="text-sm font-light md:w-3/5">
          Discover how our app can help you sleep better, wake up refreshed, and
          live a more energized life. Download now and experience the difference
          for yourself.
        </p>
      </div>
    <CommentSlider />
    </section>
  );
}

export default Comments