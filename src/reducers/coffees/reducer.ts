import { ActionTypes } from "../../types/Actions";
import { BuyCoffee, Pay, Address } from "../../types/Coffee";


export function coffeeReducer(buyItens: BuyCoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...buyItens, action.payload.buyItem];
    case ActionTypes.DELETE:
      return buyItens.filter((buyItem) => buyItem.id !== action.payload.id);
    case ActionTypes.UPDATE:
      return buyItens.map((buyItem) => {
         if (buyItem.id === action.payload.id) {
           return { ...buyItem, qtd: buyItem.qtd };
         }
        return buyItem;
      });
    default:
      return buyItens;
  }
}

export function payReducer(payItens: Pay[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...payItens, action.payload.buyItem];
    default:
      return payItens;
  }
}

export function addressReducer(addressItens: Address[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...addressItens, action.payload.addressItem];
    default:
      return addressItens;
  }
}
