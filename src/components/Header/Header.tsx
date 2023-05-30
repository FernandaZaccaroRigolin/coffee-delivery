import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Logo do Coffee Delivery" height={40}/>
      </div>
      <div className={styles.groupRight} >
        <div className={styles.mapPin} >
          <MapPin size={22} weight="fill"/>
          <span>Araraquara, SP</span>
        </div>
        <div className={styles.shoppingcart} >
          <ShoppingCart size={32} weight="fill" />
        </div>                  
      </div>
    </header>
  );
}
