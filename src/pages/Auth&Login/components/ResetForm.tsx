/** @format */
import language from "@/assets/languages/loginSource";
import styles from "../styles/form.module.css";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import Paragraph from "../../../components/Paragraph/Paragraph";
import { BsTelephone } from "react-icons/bs";
import { useAppSelector } from "../../../hooks/reduxHooks";
import useLanguages from "../../../hooks/useLanguage";

type FormType = {
  phoneNumber: string;
};

export default function ResetForm() {
  const { register, handleSubmit } = useForm<FormType>();

  function onSubmit(data: FormType): void {
    console.dir(data);
  }

  const lang = useLanguages();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Paragraph>{language[lang].resetInstructions}</Paragraph>
      <Input
        icon={<BsTelephone />}
        inputType="phone"
        {...register("phoneNumber", {
          minLength: { value: 12, message: "Please enter valid number" },
        })}
      >
        {language[lang].phone}
      </Input>
      <Button styleType="primary" className={styles.nextButton}>
        {language[lang].next}
      </Button>
    </form>
  );
}
