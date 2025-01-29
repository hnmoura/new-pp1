// components/Footer.js
export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; 2023 E-commerce. Todos os direitos reservados.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      padding: '10px',
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%',
    },
  };