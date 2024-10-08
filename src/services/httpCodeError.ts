export const HTTPCODEERROR = (code: number) => {
  const status = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Esta ação ou método não existe nesta rota. Por Favor entre em contato com o suporte.",
    409: "Conflict",
    500: "Internal Server Error",
  }[code];
  return status || "Unknown Error";
};
