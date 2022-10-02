import { useState } from 'react';
import ProductScreen from './src/screens/ProductScreen';
import AppContext from './App.context';

export default function App() {
  const [state, setState] = useState({quantity: 0, total: 0.0})

  const addProduct = (price: number) => {
    setState({
      quantity: (state.quantity + 1),
      total: Number((state.total + price).toFixed(2))
    })
  }

  return (
    <AppContext.Provider value={{addProduct, ...state}}>
      <ProductScreen></ProductScreen>
    </AppContext.Provider>
  );
}

