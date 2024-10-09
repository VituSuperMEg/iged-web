import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CircleUser,
  LogOut,
  MessageCircleQuestion,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuth";

export function Perfil() {
  const userInfo = useAuthStore((state) => state.userInfo);


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="z-50 bg-white rounded">
        <DropdownMenuLabel>Olá {userInfo?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1 hover:bg-zinc-100 cursor-pointer rounded">
          <Settings size={15} /> Configurações
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-1 hover:bg-zinc-100 cursor-pointer rounded">
          <MessageCircleQuestion size={15} /> Suporte
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-1 hover:bg-zinc-100 cursor-pointer rounded">
          <LogOut size={15} className="text-red-500" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
