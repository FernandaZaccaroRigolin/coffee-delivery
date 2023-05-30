export type Coffee = {
  id: string;
  name: string; 
  description: string;
  price: number;
  image: string;
  type: CoffeeType[];
};

//  export type CoffeeTypes = {
//    type: CoffeeType;
//  };

export enum CoffeeType { 
  TRADICIONAL= "TRADICIONAL",
  GELADO= "GELADO",
  COMLEITE= "COM LEITE",
  ESPECIAL= "ESPECIAL",
  ALCOOLICO= "ALCOÓLICO" 
 }

export type BuyCoffee = {
  id: string;
  idCoffee: string;
  user: string;
  qtd: number;
  total: number;
}

export type Address = {
  user: string;
  cep: string;
  rua: String;
  numero: String;
  complemento: String;
  bairro: String;
  cidade: String;
  uf: String;
}

export type Pay = {
  user: string;
  optionsPay: string;
}

export type OptionsPay = {
  option: string;
}


