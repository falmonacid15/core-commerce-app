import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { roleDictionary } from "@/constants/dictionaries";
import { getNameInitials } from "@/utils/formatters";
import { Button } from "@heroui/react";
import { ChevronsUpDown, LogIn, LogOut, Settings } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SidebarProfile() {
  const { isMobile, open } = useSidebar();
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <Button
        isIconOnly={!open}
        onPress={() => {
          router.push("/auth/login");
        }}
        size="sm"
      >
        {open ? "Iniciar sesión" : <LogIn className="size-4" />}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer bg-content1"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback className="rounded-lg">
              {getNameInitials(session?.user?.name as string)}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{session?.user?.name}</span>
            <span className="truncate text-xs">
              {roleDictionary[session?.user?.role]}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto size-4" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={session?.user?.image as string} />
              <AvatarFallback className="rounded-lg">
                {getNameInitials(session?.user?.name as string)}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">
                {session?.user?.name as string}
              </span>
              <span className="truncate text-xs">
                {session?.user?.email as string}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              router.push("/configuration");
            }}
          >
            <Settings />
            Ajustes de cuenta
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          variant="destructive"
          className="cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          <LogOut />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
