import { CircleUser, Menu, Package2, Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Configuracao() {
  const [tabDefault, setDefaultTab] = useState("geral");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 w-screen">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold flex items-center gap-2">
            <Settings /> Configurações
          </h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <a
              href="#"
              className={`${
                tabDefault === "geral" && "font-semibold"
              } text-primary`}
              onClick={() => setDefaultTab("geral")}
            >
              Geral
            </a>
            <a
              href="#"
              className={`${
                tabDefault === "entidade" && "font-semibold"
              } text-primary`}
              onClick={() => setDefaultTab("entidade")}
            >
              Entidade
            </a>
            <a
              href="#"
              className={`${
                tabDefault === "suporte" && "font-semibold"
              } text-primary`}
              onClick={() => setDefaultTab("suporte")}
            >
              Suporte
            </a>
          </nav>
          <div className="grid gap-6">
            {tabDefault === "geral" && (
              <>
                <h2>geral</h2>
              </>
            )}
            {tabDefault === "entidade" && (
              <>
                <h2>Entidade</h2>
              </>
            )}
            {tabDefault === "suporte" && (
              <>
                <h2>Suporte</h2>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
