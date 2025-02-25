import styles from "./page.module.css";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
