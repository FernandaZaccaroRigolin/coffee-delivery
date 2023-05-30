import expressoTradicional from "../assets/expresso-tradicional.png";
import expressoAmericano from  "../assets/expresso-americano.png";
import expressoCremoso from  "../assets/expresso-cremoso.png";
import expressoGelado from  "../assets/expresso-gelado.png";
import cafeComLeite from  "../assets/cafe-com-leite.png";
import latte from  "../assets/latte.png";
import capuccino from  "../assets/capuccino.png";
import macchiato from  "../assets/macchiato.png";
import mocaccino from  "../assets/mocaccino.png";
import chocolateQuente from  "../assets/chocolate-quente.png";
import cubano from  "../assets/cubano.png";
import havaiano from  "../assets/havaiano.png";
import arabe from  "../assets/arabe.png";
import irlandes from  "../assets/irlandes.png";


import { createContext, ReactNode, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  addNewBuyCoffeeAction,
  deleteBuyCoffeeAction,
  updateBuyCoffeeAction,
  addNewAddressAction,
  addNewPayAction,
} from "../reducers/coffees/actions";
import { coffeeReducer, payReducer, addressReducer } from "../reducers/coffees/reducer";
import { Coffee, BuyCoffee, Address, Pay } from "../types/Coffee";

interface CoffeeContextData {
  buyCoffees: BuyCoffee[];
  newBuyCoffee: string;
  addNewBuyCoffee: () => void;
  deleteBuyCoffee: (id: string) => void;
  updateBuyCoffee: (id: string, qtd: number) => void;
  handleNewBuyCoffee: (value: string) => void;
  addNewPayCoffee: () => void;
  handleNewPayCoffee: (value: string) => void;
  addNewAddressCoffee: () => void;
  handleNewAddressCoffee: (value: string) => void;
}

interface BuyCoffeeContextProviderProps {
  children: ReactNode;
}

export const BuyCoffeeContext = createContext({} as CoffeeContextData);

export function BuyCoffeeContextProvider({ children }: BuyCoffeeContextProviderProps) {
  const initialState: BuyCoffee[] = [];
  const [newBuyCoffee, setNewBuyCoffee] = useState("");
  const [buyCoffees, dispatch] = useReducer(coffeeReducer, initialState);

  const initialPayState: Pay[] = [];
  const [newPay, setNewPay] = useState("");
  const [Pays, dispatch2] = useReducer(payReducer, initialPayState);  

  const initialAddressState: Pay[] = [];
  const [newAddress, setNewAddress] = useState("");
  const [Address, dispatch3] = useReducer(addressReducer, initialAddressState);   

  function handleNewBuyCoffee(value: string) {
    setNewBuyCoffee(value);
  }

  function addNewBuyCoffee() {
    const buyCoffee = {
      id: uuidv4(),
      idCoffee: newBuyCoffee,
      user: "1",
      qtd: 1,
      total: 0
    };
    newBuyCoffee.length !== 0 && dispatch(addNewBuyCoffeeAction(buyCoffee));
    setNewBuyCoffee("");
  }

  function deleteBuyCoffee(id: string) {
    dispatch(deleteBuyCoffeeAction(id));
  }

  function updateBuyCoffee(id: string, qtd: number) {
    dispatch(updateBuyCoffeeAction(id, qtd));
  }

  function handleNewPayCoffee(value: string) {
    setNewPay(value);
  }  

  function addNewPayCoffee() {
    const pay = {
      user: "1",
      optionsPay: newPay
    };
    newPay.length !== 0 && dispatch2(addNewPayAction(pay));
    setNewPay("");
  }

  function handleNewAddressCoffee(value: string) {
    setNewAddress(value);
  }  

  function addNewAddressCoffee() {
    const address = {
      user: "1",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: ""
    };
    newAddress.length !== 0 && dispatch3(addNewAddressAction(address));
    setNewAddress("");
  }
  
  return (
    <BuyCoffeeContext.Provider
      value={{
        buyCoffees,
        newBuyCoffee,
        addNewBuyCoffee,
        deleteBuyCoffee,
        updateBuyCoffee,
        handleNewBuyCoffee,
        addNewPayCoffee,
        handleNewPayCoffee,
        addNewAddressCoffee,
        handleNewAddressCoffee,
      }}
    >
      {children}
    </BuyCoffeeContext.Provider>
  );
}

export const coffees:Coffee[]  = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90,
    image: expressoTradicional,
    type: [
      {type: "TRADICIONAL"},
    ]
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90,
    image: expressoAmericano,
    type: [
      {type: "TRADICIONAL"}
    ]
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90,
    image: expressoCremoso,
    type: [
      {type: "TRADICIONAL"}
    ]
  },
  {
    id: "4",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90,
    image: expressoGelado,
    type: [
      {type: "TRADICIONAL"},
      {type: "GELADO"}
    ]
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90,
    image: cafeComLeite,
    type: [
      {type: "TRADICIONAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "6",
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90,
    image: latte,
    type: [
      {type: "TRADICIONAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "7",
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90,
    image: capuccino,
    type: [
      {type: "TRADICIONAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "8",
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90,
    image: macchiato,
    type: [
      {type: "TRADICIONAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90,
    image: mocaccino,
    type: [
      {type: "TRADICIONAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90,
    image: chocolateQuente,
    type: [
      {type: "ESPECIAL"},
      {type: "COM LEITE"}
    ]
  },
  {
    id: "11",
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90,
    image: cubano,
    type: [
      {type: "ESPECIAL"},
      {type: "ALCOÓLICO"},
      {type: "GELADO"}
    ]
  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90,
    image: havaiano,
    type: [
      {type: "ESPECIAL"}
    ]
  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90,
    image: arabe,
    type: [
      {type: "ESPECIAL"}
    ]
  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90,
    image: irlandes,
    type: [
      {type: "ESPECIAL"},
      {type: "ALCOÓLICO"}
    ]
  },

]


