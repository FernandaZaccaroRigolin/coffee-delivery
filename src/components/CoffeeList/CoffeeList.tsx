import { useContext } from "react";
// import clipboard from "../../../assets/clipboard.svg";
import { coffees, BuyCoffeeContext } from "../../contexts/CoffeeContext";
import { CoffeeItem } from "../CoffeeItem/CoffeeItem";
import styles from "./CoffeeList.module.css";

export function CoffeeList() {
  const { buyCoffees } = useContext(BuyCoffeeContext);
  //const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.coffeList}>
      <header className={styles.header}>
        <div className={styles.coffeesTitle}>
          <p>Nossos cafés</p>
        </div>
        {/* <div className={styles.tasksDone}>
          <p>Concluídas</p>
          <span>
            {!tasks.length ? 0 : `${completedTasks} de ${tasks.length}`}
          </span>
        </div> */}
      </header>
      <section className={styles.List}>
        {coffees.map((coffee) => <CoffeeItem key={coffee.id} coffee={coffee} />)}
      </section>
    </div>
  );
}
