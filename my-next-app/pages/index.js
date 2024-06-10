import React from 'react';
import Header from './Header'; // Header bileşenini doğru şekilde içe aktarın
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Home;

