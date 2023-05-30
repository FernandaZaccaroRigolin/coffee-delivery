import { ShoppingCart } from "phosphor-react";
import styles from "./CoffeeItem.module.css";
import { useContext } from "react";
import { BuyCoffeeContext } from "../../contexts/CoffeeContext";
import { Coffee } from "../../types/Coffee";
 
interface CoffeeItemProps {
  coffee: Coffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
  const pathImages = "../../assets/";
  const { newBuyCoffee, handleNewBuyCoffee, addNewBuyCoffee } = useContext(BuyCoffeeContext);
  return (
      <div className={styles.coffeeCard}>
        <div className={styles.image}>
          <img  src={coffee.image} alt="" />
        </div>
        <div className={styles.types} >
          {coffee.type.map((type) => <p className={styles.type} key={type.type}>{type.type}</p>)}
        </div>
        <p className={styles.name}>{coffee.name}</p>
        <p className={styles.description}>{coffee.description}</p>
        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <p className={styles.cifrao}>R$</p>
            <p className={styles.price}>{coffee.price}</p>
          </div>
          <div className={styles.footerRight}>
            <div className={styles.divQtde}>
              <p className={styles.simbol1}>-</p>
              <p className={styles.qtde}>1</p>
              <p className={styles.simbol2}>+</p>
            </div>
            <button className={styles.carrinho}><ShoppingCart size={32} weight="fill" /></button>
          </div>          
        </div>
        {/* <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newBuyCoffee}
          onChange={(event) => handleNewBuyCoffee(event.target.value)}
        />
        <button type="submit" className={styles.button} onClick={addNewBuyCoffee}>
          <span>Criar</span>
          <PlusCircle size="1rem" weight="bold" />
        </button> */}
      </div>
    );    
}
