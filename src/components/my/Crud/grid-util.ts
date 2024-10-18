import { Util } from "@/services/util";

export const formatTable = (format: string | undefined, value: any) => {
  switch (format) {
    case "cpf":
      return Util.formatarCpf(value);
      break;
    default:
      return value;
  }
};
