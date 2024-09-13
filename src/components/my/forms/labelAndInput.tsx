import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff } from "lucide-react";
import {
  HTMLAttributes,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  useState,
} from "react";
import { FieldProps } from "formik";

type LabelAndInputType = FieldProps & {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  required?: boolean;
  autoFocus?: boolean;
  messagesErros: string;
  width: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function LabelAndInput({
  label,
  field,
  type = "text",
  id,
  required = false,
  autoFocus = false,
  erros,
  width = "w-full",
  ...rest
}: LabelAndInputType) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid gap-2 ">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div
        className={`rounded border border-zinc-500 flex items-center justify-between ${width} h-10 pl-1 outline-none`}
      >
        <input
          {...field}
          id={id}
          type={type === "password" && !showPassword ? "password" : type}
          autoFocus={autoFocus}
          style={{ width: "100%", height: "100%", outline: "none"}}
          className="outline-none bg-transparent rounded"
          {...rest}
        />
        {type === "password" && (
          <div onClick={togglePasswordVisibility} className="cursor-pointer">
            {showPassword ? (
              <EyeOff className="text-zinc-300" />
            ) : (
              <Eye className="text-zinc-300" />
            )}
          </div>
        )}
      </div>
      {erros && (
        <span className="text-red-500" style={{ fontSize: 12 }}>
          {erros}
        </span>
      )}
    </div>
  );
}
