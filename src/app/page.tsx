import styles from "@/app/page.module.css";
import LoginForm from "@/app/components/LoginForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}
