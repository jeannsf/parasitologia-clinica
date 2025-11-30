"use client";

import { useState } from "react";
import { flashcardsData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentIndex < flashcardsData.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(currentIndex - 1), 200);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 flex flex-col items-center min-h-[600px] space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Flashcards de Revisão</h1>
        <p className="text-muted-foreground">
          Clique no cartão para ver a resposta e use as setas para navegar.
        </p>
      </div>

      <div className="relative w-full max-w-lg aspect-[3/2]" style={{ perspective: "1000px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full cursor-pointer group"
            onClick={handleFlip}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="relative w-full h-full transition-all duration-500"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <Card 
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-2 hover:border-primary/50 transition-colors shadow-sm"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-6 bg-primary/10 px-3 py-1 rounded-full">
                  Pergunta
                </span>
                <h3 className="text-2xl font-bold text-foreground leading-tight">
                  {flashcardsData[currentIndex].front}
                </h3>
                <div className="absolute bottom-6 text-muted-foreground text-sm flex items-center gap-2 opacity-60">
                  <RotateCw size={14} /> Clique para virar
                </div>
              </Card>

              {/* Back */}
              <Card 
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-primary text-primary-foreground border-2 border-primary shadow-md"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <span className="text-xs font-bold text-primary-foreground/80 uppercase tracking-wider mb-6 bg-primary-foreground/20 px-3 py-1 rounded-full">
                  Resposta
                </span>
                <h3 className="text-xl font-medium leading-relaxed">
                  {flashcardsData[currentIndex].back}
                </h3>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-8">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <span className="font-mono text-sm text-muted-foreground">
          {currentIndex + 1} / {flashcardsData.length}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full"
          onClick={handleNext}
          disabled={currentIndex === flashcardsData.length - 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
