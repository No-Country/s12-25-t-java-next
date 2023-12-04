import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const BUTTON_VARIANTS = {
  primary: "bg-primary-100 text-white",
  secondary: "bg-secondary-100 text-white",
};

export default function Button({ text, variant, props }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        BUTTON_VARIANTS[variant],
        "w-full md:w-max h-max p-2 md:py-5 md:px-6 rounded-3xl shadow-2xl",
      )}
      {...props}
    >
      {text}
    </button>
  );
}
