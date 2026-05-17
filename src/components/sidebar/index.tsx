"use client";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Package, PanelBottom } from 'lucide-react';

export default function Sidebar() {
    return (
      <div className="flex w-full flex-col bg-muted/40">
        <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden">
                            <PanelBottom className="h-5 w-5" />
                            <span className="sr-only">Abrir / Fechar menu</span>
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="sm:max-w-xs pt-6 pl-6">
                        <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Package className="h-5 w-5 transition-all" />
                            <span className="sr-only">Logo</span>
                        </Link>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
      </div>
    );
}
