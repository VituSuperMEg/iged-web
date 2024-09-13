import { Label } from "@/components/ui/label";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import "./index.css";

type FilterType = {
  label: string;
  id: string;
  required?: boolean;
  width?: string;
};
export function Filter({
  label,
  id,
  width = "w-full",
  required = false,
}: FilterType) {
  return (
    <div className="grid gap-2 mt-[1px]">
      <div className="flex items-center">
        <Label htmlFor={id}>{label}</Label>
        {required && <span className="text-red-500">*</span>}
      </div>
      <div
        className={`rounded border border-zinc-500 flex items-center justify-between pr-2 ${width} h-10`}
      >
        <AsyncTypeahead
          className="filter"
          onSearch={(e) => console.log(e)}
          isLoading={false}
          options={["Apple", "Banana", "Cherry", "Date", "Elderberry"]}
          placeholder="Digite o nome ou código.."
          useCache={false}
        
          onChange={(selected) => console.log("Selected:", selected)}
        />
      </div>
    </div>
  );
}
