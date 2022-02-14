import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>Product...</h1>
      <ul>
        <Link to="/product/p1">
          <li>A Book</li>
        </Link>
        <Link to="/product/p2">
          <li>Pen</li>
        </Link>

        <Link to="/product/p3">
          <li>Mobile</li>
        </Link>

        <Link to="/product/p4">
         
          <li>Table</li>
        </Link>
      </ul>
    </section>
  );
};

export default Product;
