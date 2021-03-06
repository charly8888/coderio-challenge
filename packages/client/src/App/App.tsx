import * as React from "react";
import logo from "../assets/logo.svg";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="Coderio" src={logo} width={320} />
        </h1>
        <h3>Empezamos</h3>
      </header>
    </main>
  );
};

export default App;
