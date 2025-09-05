import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FeaturedIn from "./components/FeaturedIn/FeaturedIn";
import Meals from "./components/Meals/Meals";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Features from "./components/Features/Features";
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import CallToAction from "./components/CallToAction/CallToAction";
import Error from "./components/Error";
import Footer from "./Footer/Footer";
import { createBrowserRouter, Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <Features />
      <CallToAction /> */}
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <CallToAction />
          </>
        ),
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/pricing",
        element: (
          <>
            <Pricing />
            <Features />
          </>
        ),
      },
      {
        path: "/howitworks",
        element: (
          <>
            <HowItWorks />
            <Testimonials />
          </>
        ),
      },
      {
        path: "meals/restaurants/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
