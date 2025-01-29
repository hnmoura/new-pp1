export default function Sidebar({ categories }) {
    return (
      <div style={styles.sidebar}>
        <h3>Categorias</h3>
        <ul style={styles.categories}>
          {categories.map((category, index) => (
            <li key={index} style={styles.categoryItem}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  const styles = {
    sidebar: {
      width: '250px',
      backgroundColor: '#ecf0f1',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    },
    categories: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    categoryItem: {
      padding: '10px',
      margin: '5px 0',
      cursor: 'pointer',
      borderBottom: '1px solid #ccc',
    },
  };