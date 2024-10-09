import Header from "../components/Header";
import bgHero from "../assets/bg-hero.png"
import Hero from "../components/Hero";
import DisocverySection from "../components/DisocverySection";

const Home = () => {
  return (
    <div className="font-primary">
      <div className="bg-hero bg-cover bg-center min-h-h-screen bg-bg-primary bg-opacity-80" >
        <Header />
        <Hero />
        <DisocverySection />
      </div>
    </div>
  );
};

export default Home;
