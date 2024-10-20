import { Util } from "@/services/util";

export const formatTable = (format: string | undefined, value: any) => {
  switch (format) {
    case "cpf":
      return Util.formatarCpf(value);
    break;
    case "ativo":
      return value === "S" ? "Sim" : "Não";
    default:
      return value;
  }
};
