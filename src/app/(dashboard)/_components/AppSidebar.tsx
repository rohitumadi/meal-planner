"'use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Apple, Boxes, ChevronDown, Ruler, Utensils } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type RouteGroupType = {
  group: string;
  items: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

const ROUTE_GROUPS: RouteGroupType[] = [
  {
    group: "Foods Management",
    items: [
      {
        href: "/admin/foods-management/foods",
        label: "Foods",
        icon: <Apple className="mr-2 size-3" />,
      },
      {
        href: "/admin/foods-management/categories",
        label: "Categories",
        icon: <Boxes className="mr-2 size-3" />,
      },
      {
        href: "/admin/foods-management/serving-units",
        label: "Serving Units",
        icon: <Ruler className="mr-2 size-3" />,
      },
    ],
  },
  {
    group: "Meals Management",
    items: [
      {
        href: "/client",
        label: "Meals",
        icon: <Utensils className="mr-2 size-3" />,
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-center font-semibold">Admin Dashboard</h1>
      </SidebarHeader>
      <Separator className="my-2" />
      <SidebarGroupContent className="p-2">
        <SidebarMenu>
          {ROUTE_GROUPS.map((route_group) => (
            <Collapsible
              key={route_group.group}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {/* Trigger */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <span>{route_group.group}</span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {/* Collapsible Content */}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {route_group.items.map((item) => (
                      <SidebarMenuSubItem key={item.href}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={pathname.startsWith(item.href)}
                        >
                          <Link href={item.href} className="flex items-center">
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>

      <SidebarFooter />
    </Sidebar>
  );
}
