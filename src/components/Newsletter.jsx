

const Newsletter = () => {
  return (

    <section className="py-10">


    <section className="bg-purple-dozewell container mx-auto px-6 py-10 sm:px-20 sm:py-24 text-white space-y-4">
      <h1 className="text-xl md:text-5xl font-medium">Subscribe to Our Newsletter</h1>

      <div className="flex md:flex-row flex-col md:justify-between bg-white items-center rounded-lg pl-2">
        <input
          className="px-8 py-4 text-black outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-bg-primary px-6 sm:px-2 md:px-8 py-4 rounded-lg md:rounded-r-lg mb-4 md:mb-0">
          Subscribe
        </button>
      </div>
    </section>

    </section>
  );
}

export default Newsletter