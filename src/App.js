import Blog from './components/Blog';
import Navbar from './components/Navbar';
import styles from './App.module.scss';

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Blog />
      </main>
    </>
  );
}

export default App;
