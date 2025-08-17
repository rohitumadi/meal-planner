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
        <main className="bg-background z-10 flex h-13 w-screen items-center justify-between border p-2">
          <SidebarTrigger />
          {children}
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
        </main>
      </SidebarProvider>
    </>
  );
};
export default DashboardLayout;
