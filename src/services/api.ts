import Message from "@/components/my/core/messages";
import axios from "axios";
import { toast } from "react-toastify";
import { HTTPCODEERROR } from "./httpCodeError";
import { MESSAGESSTATUSCODE } from "./messages-status-code";

const getToken = () => {
  const state = JSON.parse(localStorage.getItem("auth-storage") || "{}");
  return state.state.token || null;
};
export type ApiMethods = "get" | "post" | "put" | "delete" | "patch";

export const api = axios.create({
  baseURL: "https://api-digitalizacao-nest.vercel.app/",
  // baseURL: "http://localhost:3333",
  headers: {
    "x-cliente-id": "0",
  },
});

export const submit = async (
  path: string,
  action: ApiMethods,
  params?: any
): Promise<void> => {
  try {
    if (action === "delete") {
      await api[action](path + "/" + params);
    } else {
      await api[action](path, params);
    }

    toast.success(MESSAGESSTATUSCODE(action));
  } catch (error: any) {
    Message.error({ e: HTTPCODEERROR(error.status) });
  }
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log(token);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    Message.error({ e: error });
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Message.error({ e: error.response.data.error });
    return Promise.reject(error);
  }
);
