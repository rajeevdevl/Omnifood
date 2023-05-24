import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";
import CallToAction from "./components/CallToAction/CallToAction";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <Features />
      <CallToAction />
    </>
  );
};

export default App;
