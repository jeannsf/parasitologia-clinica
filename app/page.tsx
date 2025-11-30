"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Activity,
  ShieldCheck,
  RefreshCw,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [isHeroFlipped, setIsHeroFlipped] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const features = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Ciclo Biológico",
      description:
        "Entenda o ciclo de vida do Ascaris lumbricoides, da ingestão dos ovos até a fase adulta.",
      link: "/conteudos",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Sintomas e Diagnóstico",
      description:
        "Aprenda a identificar os sinais da infecção e os métodos utilizados para o diagnóstico.",
      link: "/conteudos",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Prevenção e Tratamento",
      description:
        "Descubra as medidas profiláticas essenciais e as opções terapêuticas disponíveis.",
      link: "/conteudos",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Transmissão",
      description:
        "Compreenda como ocorre a transmissão da ascaridíase e os principais fatores de risco associados.",
      link: "/conteudos",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Prevenção",
      description:
        "Conheça as medidas de higiene e saneamento que reduzem a transmissão da ascaridíase.",
      link: "/conteudos",
    },
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollStart.current = carouselRef.current.scrollLeft;
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) {
      hasDragged.current = true;
    }
    carouselRef.current.scrollLeft = scrollStart.current - dx;
    e.preventDefault();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.touches[0].clientX;
    scrollStart.current = carouselRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    const dx = e.touches[0].clientX - startX.current;
    if (Math.abs(dx) > 5) {
      hasDragged.current = true;
    }
    carouselRef.current.scrollLeft = scrollStart.current - dx;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasDragged.current) {
      e.preventDefault();
      hasDragged.current = false;
    }
  };

  const handleCardDragStart = (e: React.DragEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-24 pb-12">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 md:pt-16">
        <div className="space-y-6">
          <Badge
            variant="secondary"
            className="px-3 py-1 text-sm font-medium rounded-full w-fit"
          >
            Parasitologia Clínica
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Desvendando a <br />
            <span className="text-primary">Ascaridíase</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Uma plataforma educativa completa sobre a infecção por{" "}
            <em>Ascaris lumbricoides</em>. Explore o ciclo de vida, patogenia,
            diagnóstico e prevenção de forma interativa.
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

        <div className="relative aspect-square md:aspect-[4/3] bg-muted/30 rounded-2xl overflow-hidden border shadow-sm flex items-center justify-center">
          <div
            className="w-full h-full max-w-xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setIsHeroFlipped((prev) => !prev)}
              animate={{ rotateY: isHeroFlipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src="/images/ascaris-lumbricoides.webp"
                  alt="Ascaris lumbricoides"
                  className="w-full h-full object-contain md:object-cover select-none"
                  draggable={false}
                />
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="text-center select-none">
                  <BookOpen className="w-24 h-24 mx-auto text-blue-600 mb-4" />
                  <p className="text-blue-700 font-semibold">
                    Ascaris lumbricoides
                  </p>
                  <p className="text-blue-600 text-sm">
                    Conhecida popularmente como lombriga, é um nematódeo
                    intestinal que parasita o ser humano.
                  </p>
                  <p className="text-blue-600 text-xs mt-1">
                    Transmissão fecal-oral, ciclo monoxênico e alta prevalência
                    em áreas com saneamento básico precário.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            Tópicos de Estudo
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Aprofunde-se nos principais aspectos desta parasitose comum através
            de nossos módulos estruturados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-sm"
            onClick={() => scrollCarousel("left")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>

          <div
            ref={carouselRef}
            className="flex-1 flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.link}
                onClick={handleCardClick}
                onDragStart={handleCardDragStart}
                className="w-full md:w-1/3 flex-shrink-0 snap-center"
              >
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

          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-sm"
            onClick={() => scrollCarousel("right")}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Pratique o que aprendeu
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Fixe o conteúdo com nossos Flashcards interativos e teste seu
              conhecimento com o Quiz final. Uma maneira dinâmica de revisar os
              pontos chave sobre a Ascaridíase.
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
              <span className="text-sm font-medium text-muted-foreground">
                Quiz Interativo
              </span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors mt-8">
              <span className="text-4xl font-bold text-primary mb-2">A</span>
              <span className="text-sm font-medium text-muted-foreground">
                Flashcards
              </span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors -mt-8">
              <span className="text-4xl font-bold text-primary mb-2">%</span>
              <span className="text-sm font-medium text-muted-foreground">
                Estatísticas
              </span>
            </Card>
            <Card className="aspect-square flex flex-col items-center justify-center p-6 text-center hover:bg-muted/50 transition-colors">
              <span className="text-4xl font-bold text-primary mb-2">Ok</span>
              <span className="text-sm font-medium text-muted-foreground">
                Resultados
              </span>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
