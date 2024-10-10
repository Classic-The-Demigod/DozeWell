import { useState } from "react";

import { FAQs } from "../data/data";
import Accordion from "./Accordion";

const FAQ = () => {


  return (
    <section className="container mx-auto px-6 py-10 sm:px-20 sm:py-24 text-white">
      <main className="bg-purple-dark-dozewell px-4 py-5 md:py-20 md:px-20">
        {FAQs.map((faq, i) => (
          <Accordion key={i} text={faq.text}/>
        ))}
      </main>
    </section>
  );
};

export default FAQ;
