import { Home } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu } from "./menu";
import { Perfil } from "@/components/my/perfil";
import { Panel } from "@/components/my/panel";

export function Dashboard() {
  const location = useLocation();

  const shouldHideContent = location.pathname === "/dashboard";
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-zinc-100">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 bg-white">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="">IGED</span>
            </Link>
            <Perfil />
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-primary h-10"
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <hr />
              <Menu />
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 m-5 bg-white rounded shadow">
          <Panel />
          {!shouldHideContent && <Outlet />}
        </main>
      </div>
    </div>
  );
}
