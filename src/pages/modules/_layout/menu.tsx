import { File, Package, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type MenuItemType = {
  Icon: any;
  label: string;
  href: string;
};

export const MenuItem = ({ label, href }: MenuItemType) => {
  return (
    <>
      <Link
        to={href}
        className="flex gap-2 border-b h-10 border-zinc-50 hover:bg-zinc-300 items-center pl-1 rounded"
      >
        {/* <Icon className="h-5 w-5" /> */}
        <span className="text-zinc-500">{label}</span>
      </Link>
    </>
  );
};

export const Menu = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex gap-2 items-end">
            <Plus /> <span>Cadastros</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <MenuItem
            Icon={Package}
            label="Unidade Orcamentárias"
            href="orgaos"
          />
          <MenuItem
            Icon={File}
            label="Tipos Documentos"
            href="tipos-documentos"
          />
          <MenuItem Icon={Package} label="Setores" href="setores" />
        </AccordionContent>
      </AccordionItem>
      <hr />
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex gap-2 items-end">
            <Package /> <span>Documentos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
