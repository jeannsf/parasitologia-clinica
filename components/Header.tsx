"use client";

import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-lg tracking-tight">Parasitologia Clínica</span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Mobile Menu */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
