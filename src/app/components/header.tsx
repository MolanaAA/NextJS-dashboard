"use client"

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { LogOutIcon, Moon, SettingsIcon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";



export const Header = () => {

  const user =
  {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://avatars.githubusercontent.com/u/12345678?v=4",
    role: "Admin"
  };

  const { setTheme } = useTheme();
  return (
    <nav className=" text-white p-4 item-center  flex justify-between">
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </Button>
      <div className="flex gap-8 items-center">



        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] text-black scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => { setTheme("light") }} >Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setTheme("dark") }} > Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setTheme("system") }} >System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="text-black dark:text-white font-bold hover:text-blue-800 "> Hi, {user.name}! {user.role} </h2>

        <DropdownMenu>
          <DropdownMenuTrigger><Avatar >
            <AvatarImage className="hover:cursor-pointer" src={user.image} alt="User Avatar" />
          </Avatar></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="text-center">{user.role}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem> <User /> Profile</DropdownMenuItem>
            <DropdownMenuItem> <SettingsIcon /> Settings</DropdownMenuItem>
            <DropdownMenuItem variant="destructive" > <LogOutIcon /> Log out </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}