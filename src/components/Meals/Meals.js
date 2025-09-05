import { useEffect, useState } from "react";
import { resList } from "../../utils/mealsData";
import styles from "./Meals.module.css";
import ContainerGrid from "../../UI/ContainerGrid";

import MealCard from "../Reusable/MealCard";
import ShimmerUI from "../../UI/ShimmerUi";
import { Link } from "react-router";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [fixedMeals, setFixedMeals] = useState([]);
  const [inputMeal, setInputMeal] = useState("");

  useEffect(() => {
    const meal =
      resList[0]?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setTimeout(() => {
      setMeals(meal);
      setFixedMeals(meal);
    }, 2000);
  }, []);

  useEffect(() => {
    const filterMeal = fixedMeals.filter((meal) => {
      return meal.info.name.toLowerCase().includes(inputMeal.toLowerCase());
    });

    setMeals(filterMeal);
  }, [inputMeal]);

  return (
    <div className={styles.sectionMeals} id="meals">
      <ContainerGrid className={styles.centerText}>
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </ContainerGrid>

      <div className={styles.searchInput}>
        <input
          type="text"
          placeholder="Find your favorite restaurant...."
          onChange={(e) => {
            setInputMeal(e.target.value);
          }}
          value={inputMeal}
        />
      </div>

      <div className={styles.filterRes}>
        <button
          onClick={() => {
            const filteredRes = fixedMeals.filter(
              (res) => res.info.avgRating > 4.5
            );

            setMeals(filteredRes);
          }}
        >
          Highest rated Restaurant
        </button>
        <button
          onClick={() => {
            setMeals(fixedMeals);
          }}
        >
          Reset
        </button>
      </div>

      <div className={styles.mealContainer}>
        {/* add here the card */}
        {meals.length > 0 ? (
          meals.map((res) => {
            return (
              <Link
                className="routerLink"
                to={"/meals/restaurants/" + res.info.id}
                key={res.info.id}
              >
                <MealCard
                  title={res.info.name}
                  cuisin={res.info.cuisines.join(",")}
                  rating={res.info.avgRating}
                  totalRating={res.info.totalRatingsString}
                  time={res.info.sla.slaString}
                  img={res.info.cloudinaryImageId}
                  price={res.info.costForTwo}
                />
              </Link>
            );
          })
        ) : (
          <ShimmerUI />
        )}
      </div>
    </div>
  );
};

export default Meals;
