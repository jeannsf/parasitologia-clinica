import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="font-bold text-lg"> Parasitologia Clínica</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Plataforma educativa moderna focada no ensino de parasitologia
              clínica.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/conteudos" className="hover:text-foreground">
                  Conteúdos
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="hover:text-foreground">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Termos de Uso</li>
              <li>Privacidade</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Parasitologia Clínica . Todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
