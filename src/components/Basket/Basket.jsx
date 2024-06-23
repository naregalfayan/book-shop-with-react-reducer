import { useContext } from "react";
import { BasketItem } from "../BasketItem/BasketItem";
import { ProductContext } from "../../context";

export const Basket = () => {
  const { state } = useContext(ProductContext);

  return (
    <>
      <div className="basket_container">
        <h3>Basket</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Count</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.basket.map((elm) => (
              <BasketItem key={elm.id} {...elm} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
