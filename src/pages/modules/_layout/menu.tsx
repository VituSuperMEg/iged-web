import { Package, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useMenuStore from "@/store/usePanel";

type MenuItemType = {
  Icon?: any;
  label: string;
  href: string;
};

export const MenuItem = ({ label, href, Icon }: MenuItemType) => {
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
      {<Icon />} <span className="text-zinc-500">{label}</span>
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
          <MenuItem label="Unidade Orcamentárias" href="orgaos" />
          <MenuItem label="Tipos Documentos" href="tipos-documentos" />
          <MenuItem label="Setores" href="setores" />
          <MenuItem label="Credores" href="credores" />
          <MenuItem label="Salas" href="salas" />
          <MenuItem label="Caixas" href="caixas" />
          <MenuItem label="Estantes" href="estantes" />
        </AccordionContent>
      </AccordionItem>
      <hr />
      <div className="hover:bg-zinc-100">
        <MenuItem Icon={Package} label="Documetnos" href="documentos" />
      </div>
    </Accordion>
  );
};
