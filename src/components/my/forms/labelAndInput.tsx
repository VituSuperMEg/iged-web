import { Label } from "@radix-ui/react-label";
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import { FieldProps } from "formik";
import "./index.css";

type LabelAndInputType = FieldProps & {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  id: string;
  required?: boolean;
  autoFocus?: boolean;
  messagesErros?: string;
  width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function LabelAndInput({
  label,
  field,
  type = "text",
  id,
  required = false,
  autoFocus = false,
  messagesErros,
  width = "w-full",
  ...rest
}: LabelAndInputType) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid gap-2">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>
      <div
        className={`relative rounded border border-zinc-500 flex items-center ${width} h-10 p-1`}
      >
        <input
          {...field}
          id={id}
          className="control"
          type={type === "password" && !showPassword ? "password" : type}
          autoFocus={autoFocus}
          disabled={rest.disabled}
          // {...rest}
        />
        {type === "password" && (
          <div
            onClick={togglePasswordVisibility}
            className="absolute right-3 cursor-pointer"
          >
            {showPassword ? (
              <EyeOff className="text-zinc-300" />
            ) : (
              <Eye className="text-zinc-300" />
            )}
          </div>
        )}
      </div>
      <div className="h-4">
        {messagesErros && (
          <span className="text-red-500 text-sm">{messagesErros}</span>
        )}
      </div>
    </div>
  );
}
