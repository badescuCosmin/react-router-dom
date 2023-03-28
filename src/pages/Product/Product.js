import {
  useParams,
  useNavigate,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { Routes } from "../../utils/routes-definition";

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.productId}`
  );
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }
  return res.json();
};

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();
  const data = useLoaderData();
  const navigationState = useNavigation();

  if (navigationState.state === "loading") {
    return <h1 className="title">Loading....</h1>;
  }

  return (
    <div style={{ border: "1px solid grey" }}>
      <h2 className="title" style={{ marginTop: 0 }}>
        Product {params.productId}
      </h2>
      {JSON.stringify(data)}
      <button
        onClick={() => navigate(Routes.ProductsRoute)}
        style={{ display: "block", marginTop: "70px" }}
      >
        Navigate back to products page
      </button>
    </div>
  );
};

export default Product;
