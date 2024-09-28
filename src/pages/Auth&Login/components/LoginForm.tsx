/** @format */

import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import styles from "../styles/form.module.css";
import language from "@/assets/languages/loginSource";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import useLanguages from "../../../hooks/useLanguage";

type Inputs = {
  firstCred: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const lang = useLanguages();

  function onSubmit(formData: Inputs) {
    console.dir(formData);
  }

  function onError(errors: unknown) {
    console.dir(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
      <Input
        inputType="text"
        {...register("firstCred")}
        icon={<MdOutlineEmail />}
      >
        {language[lang].firstCred}
      </Input>
      <Input
        inputType="password"
        {...register("password")}
        icon={<MdPassword />}
      >
        {language[lang].password}
      </Input>
      <Button styleType="primary" className={styles.loginButton}>
        {language[lang].login}
      </Button>
      <Link to="/password" className={styles.forgetButton}>
        {language[lang].forgetPassword}
      </Link>
    </form>
  );
}
