import { Label } from "@/components/ui/label";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "./index.css";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

type FilterType = {
  label: string;
  id: string;
  required?: boolean;
  width?: string;
  path: string;
};

const List = ({ value }) => {
  return (
    <div className="bg-white shadow-lg p-2 rounded-sm flex flex-col gap-2">
      <div key={value.id} className="border-l-emerald-500 border h-[50px] p-2">
        <strong>Descrição:</strong>
        <span>{value.descricao}</span>
      </div>
    </div>
  );
};

export function Filter({
  label,
  id,
  width = "w-[300px]",
  path,
  required = false,
}: FilterType) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const res = await api.get(`/api/v1/${path}/options`);
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="grid gap-2 mt-[1px]">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div
        className={`rounded border border-zinc-500 flex items-center justify-between ${width} h-10`}
      >
        <AsyncTypeahead
          className="filter"
          labelKey="descricao"
          onSearch={(e) => console.log(e)}
          isLoading={false}
          options={data}
          placeholder="Digite o nome ou código.."
          useCache={false}
          clearButton
          renderMenuItemChildren={(otp) => <List value={otp} />}
          minLength={0}
          dropup={false}
          onChange={(selected) => console.log("Selected:", selected)}
        />
      </div>
    </div>
  );
}
