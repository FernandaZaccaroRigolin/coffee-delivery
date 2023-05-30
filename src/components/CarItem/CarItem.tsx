import { Trash } from "phosphor-react";
import styles from "./CarItem.module.css";
import { useContext } from "react";
import { BuyCoffeeContext } from "../../contexts/CoffeeContext";
import { BuyCoffee, Coffee } from "../../types/Coffee";
 
interface BuyCoffeeItemProps {
  buyCoffee: BuyCoffee;
  coffee: Coffee;
}

export function CarItem({ buyCoffee,  coffee}: BuyCoffeeItemProps) {
  const pathImages = "../../assets/";
  const { newBuyCoffee, handleNewBuyCoffee, addNewBuyCoffee } = useContext(BuyCoffeeContext);
  return (
      <div className={styles.coffeeCard}>
        <div className={styles.image}>
          <img  src={coffee.image} alt="" />
        </div>
        <div className={styles.session} >
          <p className={styles.name}>{coffee.name}</p>
          <div className={styles.divbottom}>
            <div className={styles.divQtde}>            
              <p className={styles.simbol1}>-</p>
              <p className={styles.qtde}>{buyCoffee.qtd}</p>
              <p className={styles.simbol2}>+</p>            
            </div>  
            <div className={styles.divRemove}>  
              <Trash size={16}/>
              <p>REMOVER</p>
            </div>  
          </div>
        </div>  
        <div className={styles.divValue}>
            <p className={styles.cifrao}>R$</p>
            <p className={styles.price}>{buyCoffee.total}</p>
        </div>
      </div>
    );    
}
