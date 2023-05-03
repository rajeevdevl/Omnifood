import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import FeaturedIn from './components/FeaturedIn/FeaturedIn'
import Meals from './components/Meals/Meals'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
    </>
  )
}

export default App;