import { File, Package, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useMenuStore from "@/store/usePanel";

type MenuItemType = {
  Icon: any;
  label: string;
  href: string;
};

export const MenuItem = ({ label, href }: MenuItemType) => {
  const setActiveMenu = useMenuStore((state) => state.setActiveMenu);

  const handleMenuClick = () => {
    setActiveMenu({
      href: href,
      label: label,
    });
  };

  return (
    <Link
      to={href}
      className="flex gap-2 border-b h-10 border-zinc-50 hover:bg-zinc-300 items-center pl-1 rounded"
      onClick={handleMenuClick}
    >
      <span className="text-zinc-500">{label}</span>
    </Link>
  );
};

export const Menu = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:bg-zinc-100">
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
          <MenuItem Icon={Package} label="Credores" href="credores" />
          <MenuItem Icon={Package} label="Salas" href="salas" />
        </AccordionContent>
      </AccordionItem>
      <hr />
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:bg-zinc-100">
          <div className="flex gap-2 items-end">
            <Package /> <span>Documentos</span>
          </div>
        </AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
