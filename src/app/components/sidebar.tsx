import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { ChevronUp, House, LogOut, Settings, User } from "lucide-react"


export const SideBar = () => {

  const user =
  {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://avatars.githubusercontent.com/u/12345678?v=4",
    role: "Admin"
  };

  const items = [
    { name: "Home", icon: House },
    {
      name: "About Us",
      icon: Settings  // Assuming you have an icon for About Us, replace with the actual icon component
    },
    {
      name: "Contact Us",
      icon: User
    },
    {
      name: "Services",
      icon: Settings
    },
    {
      name: "Blog",
      icon: Settings
    },
    {
      name: "FAQ",
      icon: Settings
    }
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-2xl font-bold">My Sidebar</h1>
      </SidebarHeader>
      <SidebarContent className="mt-10">
        <SidebarMenu >
          {items.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton className="pl-4" asChild>
                <a href="#">  <item.icon />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="w-full justify-between">
              <main className="flex items-center gap-2 ">
                <User className="h-5 w-5" /> {user.name}
              </main> <ChevronUp className="h-5 w-5" />
            </SidebarMenuButton>
          </DropdownMenuTrigger >
          <DropdownMenuContent>
            <DropdownMenuLabel> {user.email} </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem> <User /> Profile</DropdownMenuItem>
            <DropdownMenuItem> <Settings /> Settings</DropdownMenuItem>
            <DropdownMenuItem variant="destructive" > <LogOut /> Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

