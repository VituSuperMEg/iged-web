import Message from "@/components/my/core/messages";
import axios from "axios";

const getToken = () => {
  const state = JSON.parse(localStorage.getItem("state") || "{}");
  return state.token || null;
};

export const api = axios.create({
  baseURL: "https://api-digitalizacao-nest.vercel.app/",
  // baseURL: "http://localhost:3333",
  headers: {
    "x-cliente-id": "0",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

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
