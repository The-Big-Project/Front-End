/** @format */
import LoginForm from "./components/LoginForm";
import Logo from "./components/Logo";
import styles from "./styles/main.module.css";

export default function LoginPage() {
  return (
    <section className={styles.formWindow}>
      <Logo />
      <LoginForm />
    </section>
  );
}
