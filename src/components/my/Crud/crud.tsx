import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BreadCrumb, IBreadcrumb } from "../breadcrumb";
import { Button } from "../Button";
import { Plus, Search } from "lucide-react";
import { api, submit } from "@/services/api";
import { Form } from "./form";
import { Loading } from "./loading";

import Grid from "./grid";
import Pagination from "../pagination";
import Message from "../core/messages";

type Field = {
  name: string;
  label: string;
  classHead?: string;
  classBody?: string;
  format?: string;
};

type CrudType = {
  endPoint: string;
  emptyObject: Record<string, any>;
  fields: Field[];
  FormWrapper: React.FC<any>;
  validationSchema: any;
  displayMenu: string;
} & IBreadcrumb;

export function Crud({
  displayName,
  endPoint,
  emptyObject,
  fields,
  FormWrapper,
  validationSchema,
  displayMenu,
}: CrudType) {
  const [view, setView] = useState<"list" | "new" | "edit">("list");
  const [dataObject, setDataObject] = useState<typeof emptyObject>(emptyObject);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const visibleBtns = true;

  const fetchData = async (
    page: number
  ): Promise<{ data: any[]; page: number; totalPages: number }> => {
    const res = await api.get(`${endPoint}/page?page=${page}`);
    return res.data;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: [endPoint, page],
    queryFn: () => fetchData(page),
    staleTime: 1000 * 60 * 5,
  });

  const handleNew = () => {
    setDataObject(emptyObject);
    setView("new");
  };

  const handleSave = async (values: typeof emptyObject) => {
    setLoading(true);
    if (values.id) {
      await submit(endPoint, "put", values);
    } else {
      await submit(endPoint, "post", values);
    }
    refetch();
    setLoading(false);
    setView("list");
  };

  const handleDelete = async (item: typeof emptyObject) => {
    const checked = await Message.confirmationReturn(
      "Deseja realmente excluir este registro?"
    );
    if (checked) {
      setLoading(true);
      await submit(endPoint, "delete", item);
      refetch();
      setLoading(false);
      setView("list");
    }
  };

  const loadShow = (item: typeof emptyObject) => {
    setDataObject(item);
    setView("edit");
  };

  return (
    <div className="w-full h-[800px]" style={{ marginTop: -20 }}>
      {(isLoading || loading) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
          <Loading />
        </div>
      )}

      <div className="mt-5 w-full flex-col">
        <div className="flex justify-between">
          <BreadCrumb displayMenu={displayMenu} displayName={displayName} />
          {view === "list" ? (
            <Button
              className="bg-zinc-700 rounded flex gap-2 mt-2"
              label="Novo"
              variant="success"
              icon={<Plus size={15} />}
              onClick={handleNew}
            />
          ) : (
            <Button
              className="bg-zinc-700 rounded flex gap-2  mt-2"
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
        {view === "list" && data && (
          <>
            <Grid
              enableBtnActions={true}
              fields={fields}
              list={data.data}
              loadShow={loadShow}
              handleDelete={handleDelete}
            />
            {data.totalPages > 0 && (
              <>
                <Pagination
                  currentPage={data.page}
                  onPageChange={(page) => setPage(page)}
                  totalPages={data.totalPages}
                />
                <span className="text-zinc-600">
                  Mostrando {data.page} de {data.totalPages}
                </span>
              </>
            )}
          </>
        )}

        {(view === "new" || view === "edit") && (
          <Form
            FormWrapper={FormWrapper}
            validation={validationSchema}
            emptyObject={dataObject}
            setView={setView}
            setDataObjecrt={setDataObject}
            visibleBtns={visibleBtns}
            handleNew={handleNew}
            handleDelete={handleDelete}
            enableBtns={true}
            handleSubmit={handleSave}
            view={view}
          />
        )}
      </div>
    </div>
  );
}
