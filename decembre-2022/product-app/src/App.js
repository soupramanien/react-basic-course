import { useState } from 'react';
import './App.css';
import DemoHook from './hooks/DemoHook';
import Users from './hooks/Users';
import ProductDisplay from './product/ProductDisplay';

function App() {
  const [showPosts, setShowPosts] = useState(false);
  return (
    <>
      <Users />
      <button
        onClick={() => setShowPosts((oldVal) => !oldVal)}>
        {showPosts ? "Afficher produits" : "Afficher posts"}
      </button>
      {showPosts ? <DemoHook /> : <ProductDisplay />}
    </>
  );
}

export default App;
