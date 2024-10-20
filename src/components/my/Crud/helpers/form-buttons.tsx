import { Plus, RotateCcw, Save, Trash } from "lucide-react";

export default function FormButtons(props: any) {
  const { emptyObject } = props;
  return (
    <div className="flex justify-end mt-5 gap-2">
      {props.view === "edit" && (
        <button
          className="bg-sky-500 flex items-center gap-2 p-2 rounded text-white w-30 justify-center hover:bg-sky-700"
          type="button"
          onClick={() => {
            props.handleNew();
          }}
        >
          <Plus size={15} /> Novo
        </button>
      )}
      <button
        className="bg-emerald-500 flex items-center gap-2 p-2 rounded text-white w-30 justify-center hover:bg-emerald-700"
        type="button"
        onClick={() => props.handleSave()}
      >
        <Save size={15} /> Salvar
      </button>
      <button
        className="bg-red-500 flex items-center gap-2 p-2 rounded text-white w-30 justify-center hover:bg-red-700"
        type="button"
        onClick={() => props.handleReset()}
      >
        <RotateCcw size={15} /> Cancelar
      </button>
      {props.view === "edit" && (
        <button
          className="bg-red-500 flex items-center gap-2 p-2 rounded text-white w-30 justify-center hover:bg-red-700"
          type="button"
          onClick={() => {
            props.handleDelete(emptyObject.id);
          }}
        >
          <Trash size={15} /> Excluir
        </button>
      )}
    </div>
  );
}
