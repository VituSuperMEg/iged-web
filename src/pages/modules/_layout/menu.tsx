import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

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

export const MenuItem = ({ Icon, label, href }: MenuItemType) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="bg-emerald-500 text-white p-1 text-sm rounded"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
};

export const Menu = () => {
  return (
    <Accordion type="single" collapsible>
      <TooltipProvider>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Plus />
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
            <MenuItem
              Icon={Package}
              label="Setores"
              href="setores"
            />
          </AccordionContent>
        </AccordionItem>
      </TooltipProvider>
    </Accordion>
  );
};
