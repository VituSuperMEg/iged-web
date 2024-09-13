import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button as Btn } from "../ui/button";
import { LoadingSpinner } from "./Loading";

type BtnType = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "success";
  label: string;
  icon?: ReactNode;
  isSubmitting?: boolean;
};

export function Button({
  variant = "default",
  label,
  icon,
  isSubmitting,
  ...props
}: BtnType) {
  return (
    <Btn variant={variant} className="w-full rounded gap-1" {...props}>
      {isSubmitting ? (
        <LoadingSpinner />
      ) : (
        <>
          {icon}
          <strong>{label}</strong>
        </>
      )}
    </Btn>
  );
}
