import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="w-full py-10 min-h-[85vh] bg-lightBg max-w-[1600px]">
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center h-full">
        <Card
          headerTitle="Automated Investment Excellence"
          image="/card1.png"
          contenteText="Our platform empowers you with the precision of automated investment strategies, harnessing institutional-grade techniques that let you take charge of your wealth with confidence and expertise."
        />
        <Card
          headerTitle="Unlocking Your Financial Potential"
          image="/card2.png"
          contenteText="We help you unlock your financial potential by cutting through the complexity of investing. Our transparent, client-centered approach enables you to maximize returns and build wealth at your own pace."
        />
        <Card
          headerTitle="Investing Made Personal"
          image="/card3.png"
          contenteText="Our platform offers a personalized, DIY investment experience. We cater to your unique needs and aspirations, helping you go from stagnant savings to automated investments that can generate impressive returns"
        />
      </div>
    </div>
  );
};

export default CardSection;
