import { Link} from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts();


  return (
    <div className="container mt-4" id="services">
      <div className="row text-center">
        <h1 className="text-success text-4xl text-3xl font-semibold mb-2">
          Our Fresh and Imported Foods
        </h1>
        <div className="services-container mt-2 grid md:grid-cols-3 sm:grid-cols-1 justify-center">
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <Link to="/managefood" className="btn w-50 mx-auto bg-purple-500 text-white hover:bg-purple-700 p-2 px-4 rounded-full">
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Products;
