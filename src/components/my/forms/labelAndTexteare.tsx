import { Label } from "@radix-ui/react-label";
import { InputHTMLAttributes } from "react";
import { FieldProps } from "formik";

import "./index.css";

type LabelAndTextareaType = FieldProps & {
  label: string;
  id: string;
  required?: boolean;
  autoFocus?: boolean;
  messagesErros?: string;
  width?: string;
  isUpperCase: "uppercase" | "none";
} & InputHTMLAttributes<HTMLTextAreaElement>;

export function LabelAndTextarea({
  label,
  field,
  id,
  required = false,
  autoFocus = false,
  messagesErros,
  width = "100%",
  isUpperCase = "uppercase",
  ...rest
}: LabelAndTextareaType) {
  return (
    <div className="grid gap-2" style={{ width: width }}>
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>
      <textarea
        {...field}
        id={id}
        autoFocus={autoFocus}
        style={{
          textTransform: isUpperCase,
          border: "1px solid #71717a",
          width: width,
          height: "100px",
          resize: "none",
          borderRadius: "5px",
        }}
        {...rest}
      />
      <div className="h-4">
        {messagesErros && (
          <span className="text-red-500 text-sm">{messagesErros}</span>
        )}
      </div>
    </div>
  );
}
