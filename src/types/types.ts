
export type menuItem =
{
    id : number,
    name: string,
    price: number
}

export type OrderItem = menuItem & {
  quantity: number;
};

export type MenuProps ={
  menu: menuItem;
  addToOrder: (item: menuItem) => void;
}


export type OrderID = Pick<OrderItem, 'id'>;

export type ListaOrderProps = {
  order: OrderItem[];
  removeFromOrder: (id: OrderID['id']) => void;
};


export const TIP_Porcentajes = [0.1, 0.2, 0.5] as const;
export type TipPorcentaje = typeof TIP_Porcentajes[number];
