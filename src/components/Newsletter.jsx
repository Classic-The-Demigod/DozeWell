

const Newsletter = () => {
  return (
    <section className="bg-purple-dozewell container mx-auto px-6 py-10 sm:px-20 sm:py-24 text-white space-y-4">
      <h1 className="text-xl md:text-5xl font-medium">Subscribe to Our Newsletter</h1>

      <div className="flex justify-between bg-white items-center rounded-lg pl-2">
        <input
          className="px-8 py-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-bg-primary px-2 md:px-8 py-4 rounded-r-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter