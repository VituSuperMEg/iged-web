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
  field: any;
  form: any;
  primaryKey: string;
};

const List = ({ value }) => {
  return (
    <div className="bg-white shadow-lg p-2 rounded-sm flex flex-col gap-2">
      <div
        key={value.id}
        className="border-l-emerald-500 border h-[60px] p-2 flex flex-col"
      >
        <section>
          <strong style={{ fontSize: 10 }}>Id:</strong>
          <span style={{ fontSize: 10 }}> {value.id}</span>
        </section>
        <section>
          <strong style={{ fontSize: 10 }}>Descrição:</strong>
          <span style={{ fontSize: 10 }}> {value.descricao}</span>
        </section>
      </div>
    </div>
  );
};

export function Filter({
  label,
  field,
  form,
  id,
  width = "w-[300px]",
  path,
  primaryKey = "id",
  required = false,
}: FilterType) {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    if (form.values[id]) setItem(form.values[id]);
  }, [form]);

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
        style={{ marginTop: -15 }}
      >
        <AsyncTypeahead
          className="control pr-2"
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
          onChange={(event) => {
            form.setFieldValue(id, event[0][primaryKey]);
          }}
        />
      </div>
    </div>
  );
}
