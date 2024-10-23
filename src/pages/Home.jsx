import Header from "../components/Header";

import Hero from "../components/Hero";
import DisocverySection from "../components/DisocverySection";
import Comments from "../components/Comments";
import Features from "../components/Features";
import Subscription from "../components/Subscription";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-primary">
      <div className=" bg-bg-primary bg-opacity-80">
        <Header />
        <Hero />
        <div className="bg-[#0A1334]">
        <DisocverySection />
          <Comments />
          <Features />
          <Subscription />
          <FAQ />
          <Newsletter />
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
