import "./App.css";
import { useEffect, useReducer } from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { Basket } from "./components/Basket/Basket";
import { ProductContext, initialState, reducer } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3004/products");
      const data = await res.json();
      dispatch({ type: "SET_PRODUCTS", payload: data });
    };
    fetchProducts();
  }, []);

  return (
    <div className="row">
      <ProductContext.Provider value={{ state, dispatch }}>
        <ProductList />
        <div>
          {!state.saleApplied && state.basket.length > 0 && (
            <button onClick={() => dispatch({ type: "APPLY_SALE" })}>
              Sale
            </button>
          )}
          <Basket />
          <h3>
            Total Price $
            {state.basket.reduce(
              (acc, item) => acc + item.price * item.count,
              0
            )}
          </h3>
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
