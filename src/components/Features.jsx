import { featuresData } from "../data/data";

const Features = () => {
  return (
    <section className="text-white px-6 py-10 sm:px-20 sm:py-24 bg-purple-dark-dozewell">
      <h1 className="text-base md:text-xl font-normal ">
        Experience these benefits and more with our innovative sleep improvement
        app—where better sleep leads to a better you
      </h1>

      <main className="flex sm:flex-row flex-col gap-6 pt-20 px-10">
        {featuresData.map((feature, i) => (
          <div key={i} className="flex-1 pag-4 md:gap-10 flex flex-col h-full">
            <img className="w-48 self-center" src={feature.image} alt="" />
            <h1 className="text-lg font-bold text-purple-dozewell self-center">{feature.title}</h1>
            <p className="text-sm font-light sm:self-start self-center text-center sm:text-left">{feature.body}</p>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Features;
