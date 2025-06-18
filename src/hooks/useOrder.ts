
// hooks/useOrder.ts
import { useState, useEffect, useMemo } from "react";
import type { menuItem,OrderItem, TipPorcentaje } from "../types/types";
import {  menuItems } from "../data/db";


export const useOrder = () => {
  
  const loadOrder = (): OrderItem[] => {
    const localstorageOrder = localStorage.getItem("order");
    return localstorageOrder ? JSON.parse(localstorageOrder) : [];
  };

  const [data] = useState(menuItems);
  const [order, setOrder] = useState(loadOrder);
 const [tip, setTip] = useState<TipPorcentaje | 0>(0);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const isEmpty = useMemo(() => order.length === 0, [order]);

  const sub_total = useMemo(
    () => order.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [order]
  );
   const totalTip = useMemo(() => sub_total * tip, [sub_total, tip]);
  const total_pagar = useMemo(() => sub_total + totalTip, [sub_total, totalTip]);


  function addToOrder (item: menuItem){
    const index = order.findIndex((menu) => menu.id === item.id);
    if (index >= 0) {
      if (order[index].quantity >= 5) return;
      const updated = [...order];
      updated[index].quantity++;
      setOrder(updated);
    } else {
      const newItem: OrderItem = {
         ...item, 
         quantity: 1 
        
        };

      setOrder([...order, newItem]);
    }
  };



  function removeFromOrder (id: menuItem ['id']) {
    setOrder(order.filter((item) => item.id !== id));
  };

  function clearOrder () {
    setOrder([]);
    setTip(0);

  } 

  return {
    order,
    isEmpty,
    sub_total,
    addToOrder,
    removeFromOrder,
    clearOrder,
    data,
    setTip,
    tip,
    totalTip,
    total_pagar
  
  };
};
