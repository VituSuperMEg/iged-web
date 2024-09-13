import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import {
  FileStack,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  Users2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { TooltipProvider } from "../ui/tooltip";

export function NavBar() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            to="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={goBack}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-emerald-500 text-white p-1 text-sm rounded"
            >
              Dasboard
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="orders"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <FileStack className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-emerald-500 text-white p-1 text-sm rounded"
            >
              Documentos
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="orgaos"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Orgãos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-emerald-500 text-white p-1 text-sm rounded"
            >
              Orgãos
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
