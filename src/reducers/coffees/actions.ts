import { ActionTypes } from "../../types/Actions";
import { BuyCoffee, Pay, Address } from "../../types/Coffee";

export function addNewBuyCoffeeAction(buyCoffee: BuyCoffee) {
  return { type: ActionTypes.ADD, payload: { buyCoffee } };
}

export function deleteBuyCoffeeAction(id: string) {
  return { type: ActionTypes.DELETE, payload: { id } };
}

export function updateBuyCoffeeAction(id: string, qtd: number) {
  return { type: ActionTypes.UPDATE, payload: { id, qtd } };
}

export function addNewPayAction(pay: Pay) {
  return { type: ActionTypes.ADD, payload: { pay } };
}

export function addNewAddressAction(address: Address) {
  return { type: ActionTypes.ADD, payload: { address } };
}
