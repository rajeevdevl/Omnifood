import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
    </>
  );
};

export default App;
