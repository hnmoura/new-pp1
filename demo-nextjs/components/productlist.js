// components/ProductList.js
export default function ProductList({ products }) {
    return (
      <div>
        <h2>Produtos</h2>
        <div style={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={styles.addToCartButton}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const styles = {
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
    },
    productCard: {
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      textAlign: 'center',
    },
    productImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    addToCartButton: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#2c3e50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };