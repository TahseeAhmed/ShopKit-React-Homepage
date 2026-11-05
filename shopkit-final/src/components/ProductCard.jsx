import styles from "./ProductCard.module.css";

function ProductCard() {
  const product = {
    title: "Mechanical Keyboard",
    price: 12500,
    inStock: true,
  };

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{product.title}</h3>

      <p className={styles.price}>Rs {product.price}</p>

      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button disabled={!product.inStock}>Add to Cart</button>
    </article>
  );
}

export default ProductCard;
