import styles from "./ResMen.module.css";
import { resMenu } from "../../utils/restaurantMenu";
import { useEffect, useState } from "react";
import ShimmerUI from "../../UI/ShimmerUi";
import { useParams } from "react-router";
import ContainerGrid from "../../UI/ContainerGrid";
import { StarOutline } from "react-ionicons";
import { RestaurantOutline } from "react-ionicons";
import { PricetagOutline } from "react-ionicons";
import ShimmerFoodItem from "../../UI/ShimmerFoodItem";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchApiMenu();
    // setMenu(resMenu[0]);
  }, []);

  const fetchApiMenu = async () => {
    const menuData = await fetch(
      "https://proxy.corsfix.com/?www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5114511&lng=77.0632821&restaurantId=" +
        resid
    );

    const jsonData = await menuData.json();

    setMenu(jsonData.data);
    // console.log(jsonData.data);
  };

  if (menu === null) {
    return <ShimmerFoodItem />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
    totalRatingsString,
    sla,
    areaName,
  } = menu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <ContainerGrid>
      <div className={styles.restaurantMenu}>
        <div className={styles.menuHeading}>
          <h1>{name}</h1>
          <div className={styles.headingBox}>
            <li className={styles.ratingHeading}>
              <StarOutline height="2.4rem" width="2.4rem" color={"#e67e22"} />
              <strong>
                {avgRating} ({totalRatingsString})
              </strong>
              , {costForTwoMessage}
            </li>

            <li className={styles.cuisin}> {cuisines.join(",")}</li>
            <li className={styles.placetime}>
              {areaName} -
              <span className={styles.deliveryTime}>{sla.slaString}</span>
            </li>
          </div>
        </div>
        <div className="recommend">
          {itemCards.map((item) => {
            return (
              <div className={styles.foodItemCard}>
                <div className={styles.itemCardLeft}>
                  <h3>{item.card.info.name}</h3>
                  <ul>
                    <li>
                      ₹ {item.card.info.price / 100}
                      <PricetagOutline
                        height="1.4rem"
                        width="1.4rem"
                        color={"#e67e22"}
                        className={styles.priceTag}
                      />
                    </li>
                    <li>
                      <StarOutline
                        height="1.4rem"
                        width="1.4rem"
                        color={"#e67e22"}
                      />{" "}
                      {item.card.info.ratings.aggregatedRating.rating} (
                      {item.card.info.ratings.aggregatedRating.ratingCount})
                    </li>
                    <li>{item.card.info.description}</li>
                  </ul>
                </div>
                <div className={styles.itemCardRight}>
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ContainerGrid>
  );
};

export default RestaurantMenu;
