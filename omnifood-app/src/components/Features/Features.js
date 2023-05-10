import styles from "./features.module.css";
import ContainerGrid from "../../UI/ContainerGrid";
import {
  InfiniteOutline,
  PauseOutline,
  LeafOutline,
  NutritionOutline,
} from "react-ionicons";

const Features = () => {
  return (
    <ContainerGrid className={`${styles.grid} grid grid-4-cols`}>
      <div className={styles.feature}>
        <div className={styles.featureIconBox}>
          <span className={styles.featureIcon}>
            <InfiniteOutline height="3.2rem" width="3.2rem" color={"#e67e22"} />
          </span>
        </div>
        <p className={styles.featureTitle}>Never cook again!:</p>
        <p className={styles.featureText}>
          Our subscriptions cover 365 days per year, even including major
          holidays.
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIconBox}>
          <span className={styles.featureIcon}>
            <NutritionOutline
              height="3.2rem"
              width="3.2rem"
              color={"#e67e22"}
            />
          </span>
        </div>
        <p className={styles.featureTitle}>Local and organic:</p>
        <p className={styles.featureText}>
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIconBox}>
          <span className={styles.featureIcon}>
            <LeafOutline height="3.2rem" width="3.2rem" color={"#e67e22"} />
          </span>
        </div>
        <p className={styles.featureTitle}>No waste:</p>
        <p className={styles.featureText}>
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </div>
      <div className={styles.feature}>
        <div className={styles.featureIconBox}>
          <span className={styles.featureIcon}>
            <PauseOutline height="3.2rem" width="3.2rem" color={"#e67e22"} />
          </span>
        </div>
        <p className={styles.featureTitle}>Pause anytime:</p>
        <p className={styles.featureText}>
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </div>
    </ContainerGrid>
  );
};

export default Features;
