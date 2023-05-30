import { useContext } from "react";
import { MapPinLine, CurrencyDollar, CreditCard, Bank,Money } from "phosphor-react";

// import clipboard from "../../../assets/clipboard.svg";
import { coffees, BuyCoffeeContext } from "../../contexts/CoffeeContext";
import { CoffeeItem } from "../CoffeeItem/CoffeeItem";
import styles from "./Checkout.module.css";
import { CarItem } from "../CarItem/CarItem";
import { Coffee, CoffeeType  } from "../../types/Coffee";

export function Checkout() {
  const { buyCoffees } = useContext(BuyCoffeeContext);
  //const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const coffee1:Coffee = {id: '1', name: '', description: '', price: 0, image: '', type: [CoffeeType.TRADICIONAL]};
  const coffee2:Coffee = {id: '2', name: '', description: '', price: 0, image: '', type: [CoffeeType.TRADICIONAL]};
  const buyCoffee1 = {id: '1', idCoffee: '1', user: '1', qtd: 1, total: 9.9};
  const buyCoffee2 = {id: '1', idCoffee: '2', user: '1', qtd: 2, total: 19.8};
  return (
    <main className={styles.main}>
      <div className={styles.divLeft}>
        <p className={styles.titleLeft}>Complete seu pedido</p>
        <form action="" className={styles.form}>
           <div className={styles.adress}>
            <div className={styles.adressHeader}>
              <MapPinLine size={22} className={styles.MapPinLine}/>
              <div className={styles.adressHeaderText}>
                <p className={styles.adressHeaderTitle}>Endereço de Entrega</p>
                <p className={styles.adressHeaderDescription}>Informe o endereço onde deseja receber seu pedido</p>
              </div>        
            </div> 
               
            <div className={styles.adressMain}>
              <div>
                <input type="text" placeholder="CEP" className={styles.cep}/>
              </div>  
              <div>
                <input type="text" placeholder="Rua" className={styles.rua}/>
              </div>
              <div className={styles.line3}>
                <input type="text" placeholder="Número" className={styles.numero}/>
                <input type="text" id="complemento" placeholder="Complemento                                        Optional" className={styles.complemento}/>
              </div>
              <div className={styles.line4}>
                <input type="text" placeholder="Bairro" className={styles.bairro}/>
                <input type="text" placeholder="Cidade" className={styles.cidade}/>
                <input type="text" placeholder="UF" className={styles.uf}/>
              </div>        
            </div>    

          </div>
          <div className={styles.pay}>
            <div className={styles.payHeader}>
              <CurrencyDollar size={22} weight="fill" className={styles.currencyDollar}/>
              <div className={styles.payHeaderText}>
                <p className={styles.payHeaderTitle}>Pagamento</p>
                <p className={styles.payHeaderDescription}>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>                      
            </div>    
            <div className={styles.payMain}>
              <div className={styles.credito}>
                <CreditCard size={16} weight="fill" className={styles.iconPay}/>
                CARTÃO DE CRÉDITO
              </div>
              <div className={styles.debito}>
                <Bank size={16} weight="fill" className={styles.iconPay}/>
                CARTÃO DE DÉBITO
              </div>
              <div className={styles.dinheiro}>
                <Money size={16} weight="fill" className={styles.iconPay}/>
                DINHEIRO
              </div>
            </div>  

          </div>
        </form> 
      </div>
      <div className={styles.divRight}>
        <p className={styles.titleRight}>Café selecionados</p>
        <section className={styles.List}>
          {/* <CarItem  buyCoffee={buyCoffee1}  coffee={coffee1} /> */}
          {/* <CarItem  buyCoffee={buyCoffee2}  coffee={coffee2} /> */}
          {/* {coffees.map((coffee) => <CoffeeItem key={coffee.id} coffee={coffee} />)} */}
        </section>
      </div>
    </main>
  );
}

