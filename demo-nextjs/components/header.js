import { useState } from 'react';

export default function Header({ user }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>E-commerce</div>
      <div style={styles.userInfo}>
        <img
          src={user.avatar || '/default-avatar.png'}
          alt="Avatar"
          style={styles.avatar}
        />
        <span>{user.name}</span>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
};