import { useContext } from "react";
import { ProductContext } from "../../context";

export const BasketItem = ({ id, title, price, count }) => {
  const { dispatch } = useContext(ProductContext);
  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{price * count}</td>
      <td>
        <button
          className="action-button"
          onClick={() => dispatch({ type: "INCREMENT", payload: { id } })}
        >
          +
        </button>
        <button
          className="action-button"
          onClick={() => dispatch({ type: "DECREMENT", payload: { id } })}
        >
          -
        </button>
        <button
          className="action-button"
          onClick={() => dispatch({ type: "REMOVE", payload: { id } })}
        >
          x
        </button>
      </td>
    </tr>
  );
};
