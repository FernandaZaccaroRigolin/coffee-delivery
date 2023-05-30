import styles from "./Intro.module.css";
import copo from "../../assets/copo.svg";
 import { ShoppingCart, Timer,Package, Coffee  } from "phosphor-react";

export function Intro() {
  return (
    <header className={styles.intro}>
      <div className={styles.groupLeft} >
        <div className={styles.groupLeftTop} >
          <h1 className={styles.title}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className={styles.subtitle}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </div>
        <div className={styles.subgroup}>
          <div className={styles.subgroupTop}>
            <div className={styles.shopping}>
              <ShoppingCart size={32} weight="fill" className={styles.iconShopping}/>
              <p>Compra simples e segura</p>
            </div>
            <div className={styles.package}>
              <Package size={32} weight="fill" className={styles.iconPackage}/>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>
          <div className={styles.subgroupBotton}>
            <div className={styles.timer}>
              <Timer size={32} weight="fill" className={styles.iconTimer}/>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className={styles.coffee}>
              <Coffee size={32} weight="fill" className={styles.iconCoffee}/>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupRight} >
        <img src={copo} alt="Copo de Café"/>
      </div>
    </header>
  );
}