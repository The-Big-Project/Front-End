/** @format */

import {
  Controller,
  type FieldValues,
  type Control,
  Path,
} from "react-hook-form";
import Input from "../../../components/Input/Input";
import { MdOutlineEmail } from "react-icons/md";
import language from "@/assets/languages/loginSource";
import useLanguages from "../../../hooks/useLanguage";
import type { ChangeEvent } from "react";

type FirstCredProps<FormValues extends FieldValues> = {
  isPending: boolean;
  control: Control<FormValues>;
  name: Path<FormValues>;
  className: string;
};

export default function FirstCred<FormValues extends FieldValues>({
  isPending,
  control,
  name,
  className,
}: FirstCredProps<FormValues>) {
  const lang = useLanguages();

  return (
    <Controller
      name={name}
      control={control}
      disabled={isPending}
      render={({ field }) => (
        <Input
          inputType="text"
          disabled={isPending}
          icon={<MdOutlineEmail />}
          inputClassName={className}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const startWithCode = /^(?:\+|00)/;
            const value = e.target.value;
            if (!isNaN(parseInt(value))) {
              // SAFE GUARD
              if (
                value.length < field.value.length ||
                startWithCode.test(value)
              )
                // If the current smaller than the previous, then the user is deleting the text, so just don't do any extra work
                return field.onChange(value);

              // AFTER 4 NUMBERS
              if (value.length === 5)
                field.onChange(value.slice(0, 4) + " " + value.slice(4));
              // AFTER 7 NUMBERS
              else if (value.length === 8)
                field.onChange(value.slice(0, 8) + " " + value.slice(8));
              // OTHERWISE
              else field.onChange(value);
            } else field.onChange(value);
          }}
          value={field.value}
        >
          {language[lang].firstCred}
        </Input>
      )}
    />
  );
}
