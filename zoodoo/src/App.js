import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Button from "./components/Button";
import Card from "./components/Card";

import foodImg1 from "./images/food (1).jpg";
import foodImg2 from "./images/food (2).jpg";
import foodImg3 from "./images/food (3).jpg";
import foodImg4 from "./images/food (4).jpg";
import foodImg5 from "./images/food (5).jpg";
import whyusimg from "./images/whyus.jpg";

function App() {
  return (
    <div className="px-4 md:px-12 lg:px-36 max-w-screen-xl 2xl:px-0 mx-auto">
      <Navbar />
      <Hero />

      {/* discover food section */}
      <div className="flex justify-between items-center mt-24 mb-8">
        {/* text */}
        <div>
          <h1 className="font-secondary text-black text-2xl font-bold">
            DISCOVER FOODS
          </h1>
          <p className="font-primary text-primaryGreen font-normal text-[16px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iusto{" "}
            <br />
            non odit repellendus error possimus.
          </p>
        </div>

        {/* button */}
        <div>
          <Button
            text="Discover More"
            bgColor="bg-secondaryGreen"
            textColor="text-black"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-6 mt-4 mb-24 mx-auto justify-center">
        <Card foodImage={foodImg1} foodName="Dosa" price="Rs 1550.00" />
        <Card foodImage={foodImg2} foodName="Fried Rice" price="Rs 1450.00" />
        <Card foodImage={foodImg3} foodName="Appetizer" price="Rs 1000.00" />
        <Card foodImage={foodImg4} foodName="Biriyani" price="Rs 1950.00" />
        <Card foodImage={foodImg5} foodName="Noodles" price="Rs 1550.00" />
      </div>

      {/* why zoodoo */}
      <section className="flex items-center justify-between gap-5 mb-24">
        {/* image */}
        <div className="basis-2/5 h-auto">
          <img src={whyusimg} alt="healthy dish" className="rounded-l-md" />
        </div>

        {/* text */}
        <div className="basis-3/5 h-auto">
          <h1 className="font-semibold font-secondary text-black text-2xl">
            WHY WE ARE DIFFERENT
          </h1>
          <p className="font-primary text-primaryGreen text-[18px] mb-4">
            Discover the World of Healthy Eating with Zoodo's <br /> Wide
            Selection of Nutritious Meals
          </p>
          <p className="font-primary text-black text-[16px]">
            With Zoodo, our advanced food ordering app, Not only can you order
            your favorite meals with ease, but you can also get detailed
            information about the nutrients they contain. <br />
            <br /> Our state-of-the-art artificial intelligence algorithm
            analyzes each dish and presents the information in an
            easy-to-understand format. Whether you're following a specific diet,
            trying to lose weight, or just looking to improve your overall
            health, Zoodo has got you covered. <br />
            <br /> With Zoodo, you can say goodbye to the guesswork and hello to
            a healthier, happier you. Upgrade your food ordering experience
            today with Zoodo!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
