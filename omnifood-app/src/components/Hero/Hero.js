import "./Hero.css";
import HeroImg from "../../content/img/hero.png";
import DeliveredMeals from "../DeliveredMeals/DeliveredMeals";

const Hero = () => {
  return (
    <main className="section-hero">
      <section className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>
          <DeliveredMeals />
        </div>

        <div className="hero-img-box">
          <img
            src={HeroImg}
            className="hero-img"
            alt="a women enjoying food, meals in storage container and food bowls on a table"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
