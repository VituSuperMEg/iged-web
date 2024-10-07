import { useEffect, useState } from "react";
import { BreadCrumb, IBreadcrumb } from "../breadcrumb";
import { Button } from "../Button";
import { Plus, Search } from "lucide-react";
import { api } from "@/services/api";
import { Form } from "./form";
import Grid from "./grid";
import Pagination from "../pagination";

type Field = {
  name: string;
  label: string;
  classHead?: string;
  classBody?: string;
};

type CrudType = {
  endPoint: string;
  emptyObject: Record<string, any>; // Objeto dinâmico para os dados
  fields: Field[]; // Array de campos para a grid
  FormWrapper: React.FC<any>; // Wrapper do formulário, tipado como componente React
  validationSchema: any; // Pode ser uma schema Yup ou outra
} & IBreadcrumb; // Herda IBreadcrumb para breadcrumbs

type PaginationType = {
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};

export function Crud({
  displayName,
  endPoint,
  emptyObject,
  fields,
  FormWrapper,
  validationSchema,
}: CrudType) {
  const [view, setView] = useState<"list" | "new" | "edit">("list");
  const [data, setData] = useState<(typeof emptyObject)[]>([]);
  const [dataObject, setDataObjecrt] =
    useState<typeof emptyObject>(emptyObject);
  const visibleBtns = true;
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<PaginationType>({
    limit: 0,
    page: 1,
    total: 0,
    totalPages: 0,
  });

  const loadData = async () => {
    const res = await api.get(`${endPoint}/page?page=${page}`);
    setData(res.data.data);
    setPagination({
      page: res.data.page,
      total: res.data.total,
      totalPages: res.data.totalPages,
      limit: res.data.limit,
    });
  };

  const loadShow = async (item: typeof emptyObject) => {
    setDataObjecrt(item);
    setView("edit");
  };

  const handleNew = () => {
    setDataObjecrt(emptyObject);
    setView("new");
  };

  const handleSave = async (values: typeof emptyObject) => {
    if (values.id) {
      await api.put(endPoint, values);
    } else {
      await api.post(endPoint, values);
    }

    loadData();
    setView("list");
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div className="w-full h-[800px]" style={{ marginTop: -20 }}>
      <BreadCrumb displayName={displayName} />
      <div className="mt-5 w-full flex-col">
        <div className="flex justify-end">
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
        {view === "list" && (
          <>
            <Grid
              enableBtnActions={true}
              fields={fields}
              list={data}
              loadShow={loadShow}
            />
            {pagination.totalPages > 0 && (
              <>
                <Pagination
                  currentPage={pagination.page}
                  onPageChange={(page) => setPage(page)}
                  totalPages={pagination.totalPages}
                />
                <span className="text-zinc-400">
                  Mostrando {pagination.page} de {pagination.totalPages}
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
            setDataObjecrt={setDataObjecrt}
            visibleBtns={visibleBtns}
            handleNew={handleNew}
            enableBtns={true}
            handleSubmit={handleSave}
            view={view}
          />
        )}
      </div>
    </div>
  );
}
