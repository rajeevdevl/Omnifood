import styles from "./Meals.module.css";
import ContainerGrid from "../../UI/ContainerGrid";
import meal1 from "../../content/img/meals/meal-1.jpg";
import meal2 from "../../content/img/meals/meal-2.jpg";
import { FlameOutline } from "react-ionicons";
import { RestaurantOutline } from "react-ionicons";
import { CheckmarkOutline } from "react-ionicons";
import { StarOutline } from "react-ionicons";

import ListItem from "../Reusable/listItem/ListItem";

const Meals = () => {
  const listData = [
    {
      id: 1,
      item: "Vegetarian",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 2,
      item: "Vegan",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 3,
      item: "Pescatarian",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 4,
      item: "Gluten-free",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 5,
      item: "Lactose-free",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 6,
      item: "Keto",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 7,
      item: "Paleo",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 8,
      item: "Low FODMAP",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
    {
      id: 9,
      item: "Kid-friendly",
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
    },
  ];
  return (
    <div className={styles.sectionMeals} id="meals">
      <ContainerGrid className={styles.centerText}>
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </ContainerGrid>

      <ContainerGrid
        className={`${styles.grid} ${styles.grid3cols} ${styles.marginBottomMd} grid grid-3-cols`}
      >
        <div className={styles.meals}>
          <img src={meal1} alt="Japanese Gyozas" className={styles.mealImg} />
          <div className={styles.mealContent}>
            <div className={styles.mealTags}>
              <span className={`${styles.tag} ${styles.tagVegetarian}`}>
                Vegetarian
              </span>
            </div>

            <p className={styles.mealTitle}>Japanese Gyozas</p>
            <ul className={styles.mealAttributes}>
              <li className={styles.mealAttribute}>
                <FlameOutline
                  height="2.4rem"
                  width="2.4rem"
                  color={"#e67e22"}
                />
                <span>
                  <strong>650</strong> Calories
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <RestaurantOutline
                  height="2.4rem"
                  width="2.4rem"
                  color={"#e67e22"}
                />
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <StarOutline height="2.4rem" width="2.4rem" color={"#e67e22"} />
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.meals}>
          <img src={meal2} alt="Avocado Salad" className={styles.mealImg} />
          <div className={styles.mealContent}>
            <div className={styles.mealTags}>
              <span className={`${styles.tag} ${styles.tagVegan}`}>Vegan</span>
              <span className={`${styles.tag} ${styles.tagPaleo}`}>Paleo</span>
            </div>
            <p className={styles.mealTitle}>Avocado Salad</p>
            <ul className={styles.mealAttributes}>
              <li className={styles.mealAttribute}>
                <RestaurantOutline
                  height="2.4rem"
                  width="2.4rem"
                  color={"#e67e22"}
                />
                <span>
                  <strong>400</strong> Calories
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <RestaurantOutline
                  height="2.4rem"
                  width="2.4rem"
                  color={"#e67e22"}
                />
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className={styles.mealAttribute}>
                <RestaurantOutline
                  height="2.4rem"
                  width="2.4rem"
                  color={"#e67e22"}
                />{" "}
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.diets}>
          <h3 className={`${styles.headingTertiary} heading-tertiary`}>
            Works with any diet :
          </h3>
          <ul className={styles.list}>
            {listData.map((data) => {
              return (
                <ListItem
                  listValue={data.item}
                  key={data.id}
                  icon={data.icon}
                />
              );
            })}
          </ul>
        </div>
      </ContainerGrid>

      <ContainerGrid className={styles.allRecipes}>
        <a href="#" className="link">
          See all recipes &rarr;
        </a>
      </ContainerGrid>
    </div>
  );
};

export default Meals;
