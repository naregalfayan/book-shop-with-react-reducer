import { ProductItem } from "../ProductItem/ProductItem";
import { useContext } from "react";
import { ProductContext } from "../../context";

export const ProductList = () => {
  const { state } = useContext(ProductContext);
  return (
    <div>
      <h3>Product List</h3>
      <div className="product_list_container">
        {state.products.map((elm) => (
          <ProductItem key={elm.id} {...elm} />
        ))}
      </div>
    </div>
  );
};
