// components/MenuList.tsx

import type { MenuProps } from "../types/types";

function MenuList({ menu, addToOrder }: MenuProps) {
  return (

    <div
    
      onClick={() => addToOrder(menu)}
      className="cursor-pointer p-4 border-2 border-teal-200 rounded-lg flex justify-between items-center hover:bg-teal-50 transition-colors bg-white shadow-sm"
    >
      <h3 className="font-medium text-gray-800">{menu.name}</h3>
      <p className="font-bold text-gray-900">${menu.price}</p>
    </div>
  )
}

export default MenuList