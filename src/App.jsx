import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import './App.css';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="App">
      {isModalOpen && <Cart onClose={() => setIsModalOpen(false)} />}
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
