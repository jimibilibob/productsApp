import { createContext } from 'react';

const initialValue = {
    quantity: 0,
    total: 0.0,
    addProduct: ( price: number ) => {}
}

const AppContext = createContext(initialValue);

export default AppContext;
