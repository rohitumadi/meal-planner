"use client";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { AppSidebar } from "./AppSidebar";
import { ModeToggle } from "@/components/DarkmodeToggle";

type Props = {
  children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="flex w-full flex-col">
          <nav className="bg-background z-10 flex h-13 items-center justify-between border p-2">
            <SidebarTrigger />
            {/* auth */}
            <div className="flex items-center gap-2">
              <ModeToggle />
              <SignedOut>
                <SignInButton>
                  <Button variant="outline" className="ml-2">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="outline" className="ml-2">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
          <main className="m-2">{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
};
export default DashboardLayout;
