import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit, Trash } from "lucide-react";
import { formatTable } from "./grid-util";
import { GridProps } from "./types/types";

export default function Grid({
  list,
  fields,
  enableBtnActions = false,
  loadShow,
  handleDelete,
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
                  idx % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
              >
                {fields.map((i) => (
                  <td
                    key={i.name}
                    className={`px-4 py-2 text-gray-600 ${i.classBody || ""}`}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item[i.name]
                          ? formatTable(i.format, item[i.name])
                          : "-",
                      }}
                    />
                  </td>
                ))}
                {enableBtnActions && (
                  <td className="px-4 py-2 text-right flex justify-end items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Edit
                            className="cursor-pointer text-emerald-500"
                            size={20}
                            onClick={() => loadShow(item)}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-900 text-white rounded">
                          Editar
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <Trash
                            className="cursor-pointer text-red-500"
                            size={20}
                            onClick={() => handleDelete(item.id)}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-900 text-white rounded">
                          Excluir
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
