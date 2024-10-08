import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@radix-ui/react-label";
import { api } from "@/services/api";

type DataType = {
  id: string;
  descricao: string;
};

type ComboBoxType = {
  id: string;
  path: string;
  label: string;
  placeholder: string;
  required?: boolean;
  width?: string;
  disabled?: boolean;
  field: any;
  form: any;
  messagesErros?: string;
};

export function Combobox({
  label,
  path,
  placeholder,
  required,
  width,
  form,
  id,
  messagesErros
}: ComboBoxType) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [data, setData] = React.useState<DataType[]>([]);
  const [item, setItem] = React.useState<DataType | null>(null);

  const loadData = async () => {
    const res = await api.get(`/api/v1/${path}/options`);
    setData(res.data);
  };

  const loadFind = async () => {
    if (form.values[id]) {
      const res = await api.get(`/api/v1/${path}/find?id=${form.values[id]}`);
      console.log(res.data);
      if (res.data) {
        setItem(res.data);
        setValue(res.data.descricao);
      }
    }
  };

  React.useEffect(() => {
    if (form?.values[id]) {
      loadFind();
    }
  }, [form?.values[id], path]);

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={`mt-2 ${width}`}>
      <div className="flex items-center">
        <Label htmlFor={"teste"}>{label}</Label>
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded border border-zinc-500 h-10"
          >
            {value ? value : `Selecione`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command className="bg-white rounded">
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>Nenhum item encontrado...</CommandEmpty>
              <CommandGroup>
                {data.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={(currentValue) => {
                      const selectedFramework = data.find(
                        (f) => f.id === currentValue
                      );
                      if (selectedFramework) {
                        setValue(selectedFramework.descricao);
                        form.setFieldValue(id, selectedFramework.id);
                      }
                      setOpen(false);
                    }}
                    defaultValue={item?.id}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === framework.descricao
                          ? "text-emerald-500"
                          : "opacity-0"
                      )}
                    />
                    {framework.descricao}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="h-4">
        {messagesErros && (
          <span className="text-red-500 text-sm">{messagesErros}</span>
        )}
      </div>
    </div>
  );
}
