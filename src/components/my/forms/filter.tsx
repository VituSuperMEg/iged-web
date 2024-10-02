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
    <div
      className="bg-white shadow-lg p-2 rounded-sm flex flex-col gap-2"
      key={value.id}
    >
      <div className="border-l-emerald-500 border h-[60px] p-2 flex flex-col">
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
  const [item, setItem] = useState(null);

  const loadData = async () => {
    const res = await api.get(`/api/v1/${path}/options`);
    setData(res.data);
  };

  const loadFind = async () => {
    if (form.values[id]) {
      const res = await api.get(`/api/v1/${path}/find?id=${form.values[id]}`);
      if (res.data) {
        setItem(res.data);
      }
    }
  };

  useEffect(() => {
    if (form?.values[id]) {
      loadFind();
    }
  }, [form?.values[id], path]);

  useEffect(() => {
    loadData();
  }, []);

  const filterBy = () => true;

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
          id="custom"
          onSearch={(e) => console.log(e)}
          className="control pr-2"
          labelKey={"descricao"}
          isLoading={false}
          options={data}
          placeholder="Digite o nome ou código.."
          useCache={false}
          clearButton
          defaultSelected={item ? [item] : []}
          renderMenuItemChildren={(otp) => <List value={otp} />}
          minLength={0}
          filterBy={filterBy}
          dropup={false}
          promptText="Nenhum Resultado..."
          emptyLabel="Nenhum resultado..."
          onChange={(event) => {
            if (event && event.length > 0) {
              const selectedItem = event[0];
              if (selectedItem[primaryKey]) {
                form.setFieldValue(field.name, selectedItem[primaryKey]);
              }
            } else {
              form.setFieldValue(field.name, ""); // Use field.name to clear the correct field
            }
          }}
        />
      </div>
    </div>
  );
}
