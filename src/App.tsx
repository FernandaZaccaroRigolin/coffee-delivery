import { Header } from "./components/Header/Header";
import { Intro } from "./components/Intro/Intro";
import { CoffeeList } from "./components/CoffeeList/CoffeeList";
import { Checkout } from "./components/Checkout/Checkout";
import styles from "./App.module.css";
import { BuyCoffeeContextProvider } from "./contexts/CoffeeContext";


function App() {
  return (
    <BuyCoffeeContextProvider>
      <Header />
      
      <main className={styles.wrapper}>
        { <div className={styles.divHome}>
          <Intro />
          <div className={styles.coffeeList}>  
            <CoffeeList />
          </div>
        </div>   }
        <div className={styles.checkout}>
          <Checkout />
        </div>

      </main>
    </BuyCoffeeContextProvider>
  )
}

export default App
