import { useState } from "react";
import Arrow from "../assets/arrow.png";

const Accordion = ({ text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="border-b-2 border-b-gray-dark-dozewell py-4 space-y-4">
      <div className="flex items-center justify-between ">
        <p>{text}</p>
        <img
          onClick={() => setVisible(!visible)}
          className={`w-3 cursor-pointer ${visible ? "rotate-180": ""} transition-transform duration-300 ease-in`}
          src={Arrow}
          alt=""
        />
      </div>
      {visible && (
        <p>
         
          A sleep management app tracks your sleep patterns using sensors or
          wearable devices, analyzes the data to provide personalized insights
          and reports, offers tips and relaxation aids like white noise or
          meditations, and integrates with other devices to help you improve
          your sleep quality and achieve your sleep goals.
        </p>
      )}
    </div>
  );
};

export default Accordion;
