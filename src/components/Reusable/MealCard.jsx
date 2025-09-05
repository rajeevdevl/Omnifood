import { PricetagOutline } from "react-ionicons";
import { RestaurantOutline } from "react-ionicons";
import { CheckmarkOutline } from "react-ionicons";
import { StarOutline } from "react-ionicons";
import { Link } from "react-router";
import styles from "./Card.module.css";

const MealCard = ({
  key,
  title,
  cuisin,
  rating,
  totalRating,
  time,
  img,
  price,
}) => {
  return (
    <div className={styles.meals}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          img
        }
        alt={title}
        className={styles.mealImg}
      />
      <div className={styles.mealContent}>
        <div className={styles.mealTags}>
          <span className={`${styles.tag} ${styles.tagVegetarian}`}>
            {time}
          </span>
        </div>

        <p className={styles.mealTitle}>{title}</p>
        <ul className={styles.mealAttributes}>
          <li className={styles.mealAttribute}>
            <PricetagOutline height="2.4rem" width="2.4rem" color={"#e67e22"} />
            <span>{price}</span>
          </li>
          <li className={styles.mealAttribute}>
            <RestaurantOutline
              height="2.4rem"
              width="2.4rem"
              color={"#e67e22"}
            />
            <span>{cuisin}</span>
          </li>
          <li className={styles.mealAttribute}>
            <StarOutline height="2.4rem" width="2.4rem" color={"#e67e22"} />
            <span>
              <strong>{rating}</strong> rating ({totalRating})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
