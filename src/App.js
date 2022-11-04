
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Market from './pages/market';
import Language from './components/Language';
import Currency from './components/Currency';
import { useStateContext } from './context/useStateContext';
import Favorite from './pages/Favorite';

function App() {
  const { sidebar, openLanguage, currencyList } = useStateContext()

  return (
    <div className='bg-gray-100 dark:dark-theme h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
    </div>
  );
}

export default App;
