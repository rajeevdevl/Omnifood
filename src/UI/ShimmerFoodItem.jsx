import styles from "./ShimmerFoodItem.module.css";
import { StarOutline } from "react-ionicons";
import { RestaurantOutline } from "react-ionicons";
import { PricetagOutline } from "react-ionicons";
import ContainerGrid from "./ContainerGrid";
import { useState } from "react";

const ShimmerFoodItem = () => {
  const [dummyArr, setDummyArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <ContainerGrid>
      {dummyArr.map((dummy) => (
        <div className={styles.restaurantMenu}>
          <div className={styles.menuHeading}>
            <h1></h1>
            <div className={styles.headingBox}>
              <li className={styles.ratingHeading}>
                <strong></strong>
              </li>

              <li className={styles.cuisin}> </li>
              <li className={styles.placetime}>
                <span className={styles.deliveryTime}></span>
              </li>
            </div>
          </div>
          <div className="recommend">
            <div className={styles.foodItemCard}>
              <div className={styles.itemCardLeft}>
                <h3></h3>
                <ul>
                  <li className={styles.itemLi}></li>
                  <li className={styles.itemLi}></li>
                  <li className={styles.itemLi}></li>
                </ul>
              </div>
              <div className={styles.itemCardRight}>
                <img />
              </div>
            </div>
          </div>
        </div>
      ))}
    </ContainerGrid>
  );
};

export default ShimmerFoodItem;
