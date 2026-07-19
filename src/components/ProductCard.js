import "./ProductCard.css";

function ProductCard({ product }) {
  const whatsappUrl = `https://wa.me/919023930002?text=${encodeURIComponent(
    `Hi, I am interested in ${product.name}.`
  )}`;

  return (
    <div className="product-card card">
      <div className="product-image">
        <img src = {product.image} />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn whatsapp-btn"
        >
          Get More Info
        </a>
      </div>
    </div>
  );
}

export default ProductCard;