import type { ListaOrderProps } from "../types/types"

function ListaOrder({ order, removeFromOrder }: ListaOrderProps) {
  if (order.length === 0) {
    return <p className="text-gray-500 text-center py-4">La orden está vacía</p>
  }
// en el de price le puedo poner.tofixed(2 para que tome dos decimales )
  return (
    <div className="space-y-3">
      {order.map((item) => (
        <div key={item.id} className="bg-white p-3 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {item.name} - ${item.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Cantidad: {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromOrder(item.id)}
              className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors ml-2 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListaOrder
