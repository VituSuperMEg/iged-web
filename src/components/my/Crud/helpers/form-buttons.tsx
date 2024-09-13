import { Save, Trash } from "lucide-react";
import React, { useState } from "react";

export default function FormButtons(props: any) {
  const { emptyObject } = props;

  console.log(props)
  return (
    <div className="flex justify-end mt-5 gap-2">
      <button
        className="bg-sky-500 flex items-center gap-2 p-2 rounded text-white w-24 justify-center"
        type="button"
        onClick={() => {
          props.handleNew();
        }}
      >
        Novo
      </button>
      <button
        className="bg-emerald-500 flex items-center gap-2 p-2 rounded text-white w-24 justify-center"
        type="button"
      >
        Salvar
      </button>
      {props.view === "edit" && (
        <button
          className="bg-red-500 flex items-center gap-2 p-2 rounded text-white w-24 justify-center"
          type="button"
          onClick={() => {
            props.handleDelete(emptyObject.id);
          }}
        >
          Excluir
        </button>
      )}
    </div>
  );
}
