/** @format */
import { useNavigate } from "react-router-dom";
import BackArrow from "../../components/BackArrow/BackArrow";
import ResetForm from "./components/ResetForm";
import styles from "./styles/main.module.css";
import language from "@/assets/languages/loginSource";
import useLanguages from "../../hooks/useLanguage";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const lang = useLanguages();
  return (
    <section className={styles.formWindow}>
      <BackArrow onClick={() => navigate(-1)} className={styles.arrow} />
      <h1 className={styles.title}>{language[lang].resetPassword}</h1>
      <ResetForm />
    </section>
  );
}
