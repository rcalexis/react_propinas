import type { menuItem } from "../types/types";

function Itemfood({menu}:{menu:menuItem}) {

 return (
    <li className="bigger p-4 rounded shadow mb-2">
      <h3 className="text-xl font-semibold">{menu.name}</h3>
      <p className="text-green-600">${menu.price}</p>
    </li>
  );
}

export default Itemfood;