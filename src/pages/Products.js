import ProductCard from "../components/ProductCard";
import products from "../data/products";

import "./Pages.css";

function Products() {
  return (
    <>
      <section className="page-header">
        <div className="container">

          <h1>Our Products</h1>

          <p className="section-subtitle">
            Explore our premium bottle collection.
          </p>

        </div>
      </section>

      <section className="page-content">

        <div className="container">

          <div className="grid grid-3">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Products;