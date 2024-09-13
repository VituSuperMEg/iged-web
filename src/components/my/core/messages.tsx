import Swal from "sweetalert2";

type MessageType = {
  e: string;
  title?: string;
};

const Message = {
  success: (msg = "Registros Salvo com Sucesso.") => {
    Swal.fire({
      icon: "success",
      title: "Sucesso",
      text: msg,
    });
  },
  error: ({ e, title = "Atenção" }: MessageType) => {
    Swal.fire({
      icon: "error",
      title: title,
      text: e,
    });
  },
  info: ({ e }: MessageType) => {
    Swal.fire({
      icon: "info",
      title: "Oops",
      text: e,
    });
  },
  confirmation: async (
    msg = "Deseja excluir este registro?",
    title = "Exclusão",
    icon = "warning",
    showCancelButton = true,
    confirmationText = "Sim"
  ) => {
    let res = false;
    await Swal.fire({
      title,
      text: msg,
      icon: icon,
      showCancelButton: showCancelButton,
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
    icon = "warning",
    confirmationText = "Sim!",
    cancelText = "Não!"
  ) => {
    let res = false;
    await Swal.fire({
      title,
      text: msg,
      icon: icon,
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
    Swal.fire({
      title: "Sessão",
      text: msg,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.value) {
        res = true;
      }
      return res;
    });
  },

  confirmationErrorDialogCallback: async (msg = null, callback) => {
    let res = false;
    await Swal.fire({
      title: "Sessão",
      text: msg,
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.value) {
        callback();
      }
      callback();
    });
  },
};
export default Message;
