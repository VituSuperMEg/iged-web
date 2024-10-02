import Swal, { SweetAlertIcon } from "sweetalert2"; // Importando o tipo SweetAlertIcon

type MessageType = {
  e: string;
  title?: string;
};

const Message = {
  success: (msg = "Registros Salvo com Sucesso.") => {
    Swal.fire({
      icon: "success" as SweetAlertIcon, // Garantindo que o tipo seja correto
      title: "Sucesso",
      text: msg,
    });
  },
  error: ({ e, title = "Atenção" }: MessageType) => {
    Swal.fire({
      icon: "error" as SweetAlertIcon, // Garantindo que o tipo seja correto
      title: title,
      text: e,
    });
  },
  info: ({ e }: MessageType) => {
    Swal.fire({
      icon: "info" as SweetAlertIcon, // Garantindo que o tipo seja correto
      title: "Oops",
      text: e,
    });
  },
  confirmation: async (
    msg = "Deseja excluir este registro?",
    title = "Exclusão",
    icon: SweetAlertIcon = "warning", // Definindo o tipo corretamente
    showCancelButton = true,
    confirmationText = "Sim"
  ) => {
    let res = false;
    await Swal.fire({
      title,
      text: msg,
      icon,
      showCancelButton,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Não!",
      confirmButtonText: confirmationText,
    }).then((result) => {
      if (result.value) {
        res = true;
      }
    });
    return res;
  },

  confirmationReturn: async (
    msg = "Deseja excluir este registro?",
    title = "Exclusão",
    icon: SweetAlertIcon = "warning", // Definindo o tipo corretamente
    confirmationText = "Sim!",
    cancelText = "Não!"
  ) => {
    let res = false;
    await Swal.fire({
      title,
      text: msg,
      icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: cancelText,
      confirmButtonText: confirmationText,
    }).then((result) => {
      if (result.value) {
        res = true;
      }
    });
    return res;
  },

  confirmationErrorDialog: async (msg = null) => {
    let res = false;
    await Swal.fire({
      title: "Sessão",
      text: msg,
      icon: "warning" as SweetAlertIcon, // Garantindo que o tipo seja correto
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.value) {
        res = true;
      }
      return res;
    });
    return res;
  },

  confirmationErrorDialogCallback: async (msg = null, callback: () => void) => {
    const res = false;
    await Swal.fire({
      title: "Sessão",
      text: msg,
      icon: "warning" as SweetAlertIcon, 
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.value) {
        callback();
      }
    });
    return res;
  },
};

export default Message;
