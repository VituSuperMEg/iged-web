import { ApiMethods } from "./api";

export const MESSAGESSTATUSCODE = (status: ApiMethods) => {
  switch (status) {
    case "put":
      return "Registro Alterado com Sucesso!";
    case "post":
      return "Regristro Criado com Sucesso!";
    case "delete":
      return "Registro Excluido com Sucesso!";
    default:
      return "Erro desconhecido";
  }
};
