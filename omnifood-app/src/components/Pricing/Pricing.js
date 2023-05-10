import styles from "./Pricing.module.css";
import ContainerGrid from "../../UI/ContainerGrid";
import ListItem from "../Reusable/listItem/ListItem";
import { CheckmarkOutline } from "react-ionicons";
import { CloseOutline } from "react-ionicons";

const Pricing = () => {
  const pricing1 = [
    {
      key: 1,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "1 meal per day",
    },
    {
      key: 2,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Order between 11am - 9pm",
    },
    {
      key: 3,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Delivery is free",
    },
    {
      key: 3,
      icon: <CloseOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Delivery is free",
    },
  ];

  const pricing2 = [
    {
      key: 1,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: `<strong>2 meals</strong> per day`,
    },
    {
      key: 2,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Order <strong>24/7</strong>",
    },
    {
      key: 3,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Delivery is free",
    },
    {
      key: 4,
      icon: <CheckmarkOutline height="3rem" width="3rem" color={"#e67e22"} />,
      plan: "Get access to latest recipes",
    },
  ];
  return (
    <section className={styles.pricingSection}>
      <ContainerGrid className={styles.centerText}>
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without worrying about spending much
        </h2>
      </ContainerGrid>

      <ContainerGrid className={`${styles.grid} grid grid-2-cols`}>
        <div className={`${styles.pricingPlan} ${styles.pricingPlanStarter}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Starter</p>
            <p className={styles.planPrice}>
              <span>$</span>399
            </p>
            <p className={`${styles.planText}`}>
              Per month. That's just 13$ per meal!
            </p>
          </header>
          <ul className="list">
            {pricing1.map((pricing) => {
              return (
                <ListItem
                  listValue={pricing.plan}
                  key={pricing.key}
                  icon={pricing.icon}
                />
              );
            })}
          </ul>
          <div className={styles.planSignUp}>
            <a href="#" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
          </div>
        </div>
        <div className={`${styles.pricingPlan} ${styles.pricingPlanComplete}`}>
          <header className={styles.planHeader}>
            <p className={styles.planName}>Complete</p>
            <p className={styles.planPrice}>
              <span>$</span>649
            </p>
            <p className={styles.planText}>
              Per month. That's just 11$ per meal!
            </p>
          </header>
          <ul className="list">
            {pricing2.map((pricing) => {
              return (
                <ListItem
                  listValue={pricing.plan}
                  key={pricing.key}
                  icon={pricing.icon}
                />
              );
            })}
          </ul>
          <div className={styles.planSignUp}>
            <a href="#" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
          </div>
        </div>
      </ContainerGrid>

      <ContainerGrid>
        <aside className={styles.planDetails}>
          Prices include all applicable taxes. Users can cancel at any time.
        </aside>
      </ContainerGrid>
    </section>
  );
};

export default Pricing;
