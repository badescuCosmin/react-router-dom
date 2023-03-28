import { Product } from "../../components";
import { Outlet } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product 2",
  },
  {
    id: 3111112,
    name: "product 3",
  },
];

const Products = () => {
  return (
    <div>
      <h1 className="title"> Products</h1>
      <div style={{ display: "flex", marginBottom: "100px" }}>
        {products.map(({ id, name }) => (
          <Product product={name} key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
