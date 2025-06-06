import { useState } from 'react'
import { menuItems } from './data/db';
import Itemfood from './components/Itemfood'
import './App.css'

function App() {
  const [items] = useState(menuItems);

  return (
    <div className="p-4 text-left w-full max-w-md">
      <h1 className="text-3xl text-blue-300 font-bold mb-4 text-left">
        Menu
      </h1>
      <ul className="text-left">
        {items.map((item) => (
          <Itemfood key={item.id} menu={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
