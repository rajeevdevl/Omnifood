import styles from "./ListItem.module.css";
// import { CheckmarkOutline } from "react-ionicons";
const ListItem = (props) => {
  return (
    <>
      <li className={styles.listItem}>
        {props.icon}
        <span dangerouslySetInnerHTML={{ __html: props.listValue }}></span>
      </li>
    </>
  );
};

export default ListItem;
