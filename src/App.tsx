// App.tsx
// import { useState } from "react";
// import { menuItems } from "./data/db";
import MenuList from "./components/MenuList";
import ListaOrder from "./components/ListaOrder";
import { useOrder } from "./hooks/useOrder";
import "./App.css";
import { TIP_Porcentajes } from "./types/types";
function App() {
  const {
    order,
    addToOrder,
    removeFromOrder,
    sub_total,
    isEmpty,
    clearOrder,
    data,
    tip,
    setTip,
    totalTip,
    total_pagar,
  } = useOrder();

  return (
    <div className="p-4 w-full max-w-6xl mx-auto bg-white shadow-xl rounded-lg  ">
      <h1 className="text-3xl text-purple-600 font-bold mb-6 text-center bg-gray-100 p-4 rounded">
        Calculadora de Propinas y Consumo
      </h1>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* menu */}
        <div className="flex-1">
          <h2 className="text-3xl text-purple-600 font-bold mb-6 text-center bg-gray-100 p-4 rounded">Menu</h2>
          <ul className="grid grid-cols-1 gap-4">
            {data.map((item) => (
              <MenuList key={item.id} menu={item} addToOrder={addToOrder} />
            ))}
          </ul>
        </div>

        {/* pedido */}
        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Consumo</h2>
          <ListaOrder order={order} removeFromOrder={removeFromOrder} />


          {!isEmpty && (
           <div className="space-y-6 border-t pt-6">
                {/* Tip Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Propina:</h3>
                  <div className="space-y-2">
                    {TIP_Porcentajes.map((percentage) => (
                      <label key={percentage} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="tip"
                          value={percentage}
                          checked={tip === percentage}
                          onChange={() => setTip(percentage)}
                          className="w-4 h-4 text-teal-400 focus:ring-teal-400"
                        />
                        <span className="text-gray-700 font-medium">{percentage * 100}%</span>
                      </label>
                    ))}
                  </div>
                </div>

              {/* totales */}
              <div className="border-t pt-4 space-y-2">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Totales y Propina:</h3>
                <p className="font-medium">
                  Subtotal a pagar: ${sub_total.toFixed(2)}
                </p>
                <p className="font-medium">Propina: ${totalTip.toFixed(2)}</p>
                <p className="text-lg font-bold">
                  Total a Pagar: ${total_pagar.toFixed(2)}
                </p>
                   <button
                  onClick={clearOrder}
                  className="w-full !bg-black text-white py-3 px-4 rounded-lg font-bold hover:!bg-gray-800 transition-colors"

                >
                  GUARDAR ORDEN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
