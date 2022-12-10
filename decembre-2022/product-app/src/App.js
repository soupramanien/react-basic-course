import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to='/products'>Products</Link>
      <Outlet />
    </>
  );
}

export default App;
