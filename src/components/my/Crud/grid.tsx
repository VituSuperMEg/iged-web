import { Edit, Trash } from "lucide-react";

// Tipagem para cada campo
type Field = {
  name: string;
  label: string;
  classHead?: string;
  classBody?: string;
};

// Tipagem para o item da lista
type ListItem = {
  [key: string]: any;
};

// Tipagem para as propriedades do componente
type GridProps = {
  list: ListItem[]; // Lista de itens, que é um array de objetos
  fields: Field[]; // Campos que descrevem as colunas
  enableBtnActions?: boolean; // Indica se os botões de ação estão habilitados
  loadShow: (item: ListItem) => void; // Função para carregar um item ao clicar no botão de edição
};

export default function Grid({
  list,
  fields,
  enableBtnActions = false,
  loadShow,
}: GridProps) {
  return (
    <div className="">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="">
            {fields.map((item) => (
              <th
                key={item.label}
                className={`${item.classHead} px-4 py-2 text-left text-gray-700 font-medium`}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </th>
            ))}
            {enableBtnActions && (
              <th className="px-4 py-2 text-right">
                <span>Ações</span>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, idx) => (
              <tr
                key={idx}
                className={`border-t ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {fields.map((i) => (
                  <td
                    key={i.name}
                    className={`px-4 py-2 text-gray-600 ${i.classBody || ""}`}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item[i.name] ? item[i.name] : "-",
                      }}
                    />
                  </td>
                ))}
                {enableBtnActions && (
                  <td className="px-4 py-2 text-right flex justify-end items-center">
                    <Edit
                      className="cursor-pointer text-emerald-500"
                      size={20}
                      onClick={() => loadShow(item)}
                    />
                    <Trash className="cursor-pointer text-red-500" size={20} />
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
