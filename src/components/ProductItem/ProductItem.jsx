import { useContext } from "react";
import { ProductContext } from "../../context";

export const ProductItem = ({ title, id, price, photo }) => {
  const { dispatch } = useContext(ProductContext);

  return (
    <>
      <div className="product_item_container">
        <img src={photo} />
        <p>{title}</p>
        <p>
          <strong>{price}USD</strong>
        </p>
        <button onClick={() => dispatch({ type: "MOVE", payload: { id } })}>
          Move
        </button>
      </div>
    </>
  );
};
