"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem
            setActive={setActive} active={active} item="Portfolio"
            >
               <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/wd">
            Web Development
            </HoveredLink>
            <HoveredLink href="/ui-ux">
             UI/UX Design
            </HoveredLink>
            <HoveredLink href="/gd">
              Graphic Design
            </HoveredLink>
               </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
            </Link>
        </Menu>
        
    </div>
  )
}

export default Navbar