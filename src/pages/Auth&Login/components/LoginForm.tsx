/** @format */

import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import styles from "../styles/form.module.css";
import language from "@/assets/languages/loginSource";
import Button from "../../../components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdPassword } from "react-icons/md";
import useLanguages from "../../../hooks/useLanguage";
import useLogin from "../../../hooks/useLogin";
import { Oval } from "react-loader-spinner";
import { useEffect } from "react";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import FirstCred from "./FirstCred";

type Inputs = {
  firstCred: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit, control } = useForm<Inputs>();

  const { error, isPending, login, isError } = useLogin();

  const navigate = useNavigate();

  const lang = useLanguages();

  function onSubmit(formData: Inputs) {
    console.dir(formData);
    login(formData);
  }

  function onError(errors: unknown) {
    console.dir(errors);
  }

  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) navigate("/app");
  }, [navigate]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
      <FirstCred name="firstCred" control={control} isPending={isPending} />
      <Input
        inputType="password"
        disabled={isPending}
        {...register("password")}
        icon={<MdPassword />}
      >
        {language[lang].password}
      </Input>
      <Button
        styleType={isPending ? "secondary" : "primary"}
        disabled={isPending}
        className={styles.loginButton}
      >
        {isPending ? (
          <Oval
            visible={true}
            height="16"
            strokeWidth="6"
            ariaLabel="rotating-lines-loading"
            color="black"
            secondaryColor="white"
          />
        ) : (
          language[lang].login
        )}
      </Button>
      {error && <ErrorMessage>{isError && "Credentials Error"}</ErrorMessage>}
      <Link to="/password" className={styles.forgetButton}>
        {language[lang].forgetPassword}
      </Link>
    </form>
  );
}
