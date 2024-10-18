import { useEffect, useState } from "react";
import { BreadCrumb, IBreadcrumb } from "../breadcrumb";
import { Button } from "../Button";
import { Plus, Search } from "lucide-react";
import { api, submit } from "@/services/api";
import { Form } from "./form";
import Grid from "./grid";
import Pagination from "../pagination";
import Message from "../core/messages";
import { Loading } from "./loading";

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
  displayMenu,
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
  const [loading, setLoading] = useState<boolean>(false);

  const loadData = async () => {
    setLoading(true);
    const res = await api.get(`${endPoint}/page?page=${page}`);
    setData(res.data.data);
    setPagination({
      page: res.data.page,
      total: res.data.total,
      totalPages: res.data.totalPages,
      limit: res.data.limit,
    });
    setLoading(false);
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
    setLoading(true);
    if (values.id) {
      await submit(endPoint, "put", values);
    } else {
      await submit(endPoint, "post", values);
    }
    loadData();
    setView("list");
    setLoading(false);
  };

  const handleDelete = async (item: typeof emptyObject) => {
    const checked = await Message.confirmationReturn(
      "Deseja realmente excluir este registro?"
    );
    if (checked) {
      setLoading(true);
      await submit(endPoint, "delete", item);
      loadData();
      setView("list");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div className="w-full h-[800px]" style={{ marginTop: -20 }}>
      {loading && (
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
        {view === "list" && (
          <>
            <Grid
              enableBtnActions={true}
              fields={fields}
              list={data}
              loadShow={loadShow}
              handleDelete={handleDelete}
            />
            {pagination.totalPages > 0 && (
              <>
                <Pagination
                  currentPage={pagination.page}
                  onPageChange={(page) => setPage(page)}
                  totalPages={pagination.totalPages}
                />
                <span className="text-zinc-600">
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
