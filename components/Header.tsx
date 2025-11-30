"use client";

import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Conteúdos", path: "/conteudos" },
    { label: "Quiz", path: "/quiz" },
    { label: "Flashcards", path: "/flashcards" },
    { label: "Sobre", path: "/sobre" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-lg tracking-tight">
            Parasitologia Clínica
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-xs px-6 py-8 flex flex-col gap-6 border-l"
          >
            <div className="flex items-center justify-between pb-4 border-b">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMobileOpen(false)}
              >
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold text-base">
                  Parasitologia Clínica
                </span>
              </Link>
            </div>

            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <div key={item.path} className="w-full">
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex w-full items-center justify-between px-1 py-3 text-base font-medium text-foreground/80 hover:text-primary"
                  >
                    <span>{item.label}</span>
                  </Link>
                  {index < navItems.length - 1 && (
                    <div className="w-full h-px bg-border" />
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
