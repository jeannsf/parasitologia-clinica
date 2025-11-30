import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, RefreshCw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const features = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Ciclo Biológico",
      description: "Entenda o ciclo de vida do Ascaris lumbricoides, da ingestão dos ovos até a fase adulta.",
      link: "/conteudos",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Sintomas e Diagnóstico",
      description: "Aprenda a identificar os sinais da infecção e os métodos utilizados para o diagnóstico.",
      link: "/conteudos",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Prevenção e Tratamento",
      description: "Descubra as medidas profiláticas essenciais e as opções terapêuticas disponíveis.",
      link: "/conteudos",
    }
  ];

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 md:pt-16">
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium rounded-full w-fit">
            Parasitologia Clínica
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Desvendando a <br/>
            <span className="text-primary">Ascaridíase</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Uma plataforma educativa completa sobre a infecção por <em>Ascaris lumbricoides</em>. 
            Explore o ciclo de vida, patogenia, diagnóstico e prevenção de forma interativa.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/conteudos">
              <Button size="lg" className="gap-2">
                Iniciar Estudo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline" size="lg">
                Testar Conhecimento
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[4/3] bg-muted/30 rounded-2xl overflow-hidden border shadow-sm">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="text-center">
              <BookOpen className="w-24 h-24 mx-auto text-blue-600 mb-4" />
              <p className="text-blue-700 font-semibold">Ascaris lumbricoides</p>
              <p className="text-blue-600 text-sm">Roundworm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section>
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Tópicos de Estudo</h2>
          <p className="text-muted-foreground max-w-2xl">
            Aprofunde-se nos principais aspectos desta parasitose comum através de nossos módulos estruturados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer border-muted">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Section Callout */}
      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Pratique o que aprendeu</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fixe o conteúdo com nossos Flashcards interativos e teste seu conhecimento com o Quiz final. 
              Uma maneira dinâmica de revisar os pontos chave sobre a Ascaridíase.
            </p>
            <div className="flex gap-4">
              <Link href="/flashcards">
                <Button variant="default">Abrir Flashcards</Button>
              </Link>
              <Link href="/quiz">
                <Button variant="outline">Ir para o Quiz</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors">
              <span className="text-4xl font-bold text-primary mb-2">?</span>
              <span className="text-sm font-medium text-muted-foreground">Quiz Interativo</span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors mt-8">
              <span className="text-4xl font-bold text-primary mb-2">A</span>
              <span className="text-sm font-medium text-muted-foreground">Flashcards</span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors -mt-8">
              <span className="text-4xl font-bold text-primary mb-2">%</span>
              <span className="text-sm font-medium text-muted-foreground">Estatísticas</span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors">
              <span className="text-4xl font-bold text-primary mb-2">Ok</span>
              <span className="text-sm font-medium text-muted-foreground">Resultados</span>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
