import styles from "./features.module.css";
import ContainerGrid from "../../UI/ContainerGrid";

const Features = () => {
  return (
    <ContainerGrid className={`${styles.grid} grid grid-4-cols`}>
      <div className={styles.feature}>Feature1</div>
      <div className={styles.feature}>Feature2</div>
      <div className={styles.feature}>Feature3</div>
      <div className={styles.feature}>Feature4</div>
    </ContainerGrid>
  );
};

export default Features;
