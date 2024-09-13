import { ReactNode, useEffect, useState } from "react";
import { BreadCrumb, IBreadcrumb } from "../breadcrumb";
import { Button } from "../Button";
import { Plus, Search } from "lucide-react";
import { api } from "@/services/api";
import { Table } from "@/components/ui/table";
import Grid from "./grid";
import { Form } from "./form";
import Message from "../core/messages";

type CrudType = {
  endPoint: string;
  emptyObject: object;
  fields: any;
  FormWrapper: any;
  validationSchema: any;
} & IBreadcrumb;

export function Crud({
  displayName,
  endPoint,
  emptyObject,
  fields,
  FormWrapper,
  validationSchema,
}: CrudType) {
  const [view, setView] = useState("list");
  const [data, setData] = useState<(typeof emptyObject)[]>([]);
  const [dataObject, setDataObjecrt] = useState(emptyObject);
  const [visibleBtns, setVisibleBtns] = useState(true);

  const loadData = async () => {
    const res = await api.get(endPoint);
    setData(res.data);
  };

  const loadShow = async (item: typeof emptyObject) => {
    setDataObjecrt(item);
    setView("edit");
  };

  const handleNew = () => {
    setDataObjecrt(emptyObject);
    setView("new");
  };

  const handleDelete = async (id: number) => {
    const res = await Message.confirmationReturn(
      "Deseja realmente excluír este registro?"
    );
  };

  const handleSave = async (values: typeof emptyObject) => {
    const res = await api.post(endPoint, values);
    loadData();
    setView("list");
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="w-full h-[800px]" style={{ marginTop: -20 }}>
      <BreadCrumb displayName={displayName} />
      <div className="mt-5 w-full flex-col">
        <div className="flex justify-end">
          {view === "list" ? (
            <Button
              className="bg-zinc-700 rounded flex gap-2"
              label="Novo"
              variant="success"
              icon={<Plus size={15} />}
              onClick={() => {
                setView("new");
                setDataObjecrt(emptyObject);
              }}
            />
          ) : (
            <Button
              className="bg-zinc-700 rounded flex gap-2"
              label="Buscar"
              variant="success"
              onClick={() => setView("list")}
              icon={<Search size={15} />}
            />
          )}
        </div>

        <hr className="mt-4" />
      </div>
      <div className="mt-16">
        {view === "list" && (
          <Grid
            enableBtnActions={true}
            fields={fields}
            list={data}
            loadShow={loadShow}
            handleDelete={handleDelete}
          />
        )}
        {(view === "new" || view === "edit") && (
          <Form
            FormWrapper={FormWrapper}
            validation={validationSchema}
            emptyObject={dataObject}
            setView={setView}
            setDataObjecrt={setDataObjecrt}
            visibleBtns={visibleBtns}
            handleNew={handleNew}
            enableBtns={true}
            handleSubmit={handleSave}
            handleDelete={handleDelete}
            view={view}
          />
        )}
      </div>
    </div>
  );
}
