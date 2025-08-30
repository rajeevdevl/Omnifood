import "./HowItWorks.css";
import ContainerGrid from "../../UI/ContainerGrid";
import step1Img from "../../content/img/app/app-screen-1.png";
import step2Img from "../../content/img/app/app-screen-2.png";
import step3Img from "../../content/img/app/app-screen-3.png";

const HowItWorks = () => {
  return (
    <section className="section-how" id="howitworks">
      <ContainerGrid className="">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">your daily dose of health in</h2>
      </ContainerGrid>

      <ContainerGrid className="grid grid-2-cols HowGrid">
        {/* step 1 */}

        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={step1Img}
            className="step-img"
            alt="iPhone app preferences selection screen"
          />
        </div>

        {/* step 2 */}
        <div className="step-img-box">
          <img
            src={step2Img}
            className="step-img"
            alt="iPhone app delivery screen"
          />
        </div>

        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
          <p className="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* step 3 */}

        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Receive meals at convenient time</h3>
          <p className="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div className="step-img-box">
          <img
            src={step3Img}
            className="step-img"
            alt="iPhone app preferences selection screen"
          />
        </div>
      </ContainerGrid>
    </section>
  );
};

export default HowItWorks;
