import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sobre() {
  return (
    <div className="max-w-2xl mx-auto py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Sobre o Projeto</h1>
        <p className="text-muted-foreground">
          Conheça mais sobre a iniciativa e as tecnologias utilizadas.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle> Parasitologia Clínica - Ascaridíase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Este site educativo foi desenvolvido como parte de um trabalho
            acadêmico focado no estudo da <strong>Ascaridíase</strong>.
          </p>
          <p>
            O objetivo é fornecer uma ferramenta interativa e acessível para
            estudantes e interessados na área de parasitologia, utilizando
            tecnologias web modernas para facilitar o aprendizado e a fixação do
            conteúdo.
          </p>
          <div className="pt-4 border-t mt-4">
            <p className="text-sm font-medium text-foreground mb-2">
              Tecnologias Utilizadas:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js (Framework React moderno)</li>
              <li>TypeScript (Tipagem estática)</li>
              <li>Tailwind CSS (Estilização Utilitária)</li>
              <li>Shadcn/ui (Componentes Acessíveis)</li>
              <li>Framer Motion (Animações Fluidas)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
