"use client";

import { useState } from "react";
import { quizQuestions } from "@/lib/data";
import { CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-md mx-auto py-12 text-center space-y-8">
        <Card className="border-2">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
              <Trophy className="w-10 h-10" />
            </div>
            <CardTitle className="text-3xl">Quiz Finalizado!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Você acertou</p>
              <p className="text-4xl font-bold text-primary">
                {score} <span className="text-xl text-muted-foreground font-normal">/ {quizQuestions.length}</span>
              </p>
            </div>
            <Progress value={(score / quizQuestions.length) * 100} className="h-3" />
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button onClick={restartQuiz} variant="outline" className="w-full gap-2">
              <RefreshCw className="w-4 h-4" /> Tentar Novamente
            </Button>
            <Link href="/conteudos" className="w-full">
              <Button className="w-full">Voltar aos Estudos</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quiz: Ascaridíase</h1>
        <Badge variant="outline" className="text-sm py-1">
          Questão {currentQuestion + 1} de {quizQuestions.length}
        </Badge>
      </div>

      <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="h-2" />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {question.question}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          {question.options.map((option, index) => {
            let className = "w-full justify-between h-auto py-4 px-6 text-left font-normal hover:bg-muted/50";
            
            if (isAnswered) {
              if (index === question.correctAnswer) {
                className = "w-full justify-between h-auto py-4 px-6 text-left font-medium border-green-500 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700";
              } else if (index === selectedOption) {
                className = "w-full justify-between h-auto py-4 px-6 text-left font-medium border-red-500 bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700";
              } else {
                className = "w-full justify-between h-auto py-4 px-6 text-left opacity-50";
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={className}
              >
                <span className="flex-1">{option}</span>
                {isAnswered && index === question.correctAnswer && <CheckCircle className="text-green-600 ml-2 h-5 w-5" />}
                {isAnswered && index === selectedOption && index !== question.correctAnswer && <XCircle className="text-red-600 ml-2 h-5 w-5" />}
              </Button>
            );
          })}
        </CardContent>

        {isAnswered && (
          <CardFooter className="flex-col items-stretch gap-4 bg-muted/30 pt-6 border-t">
            <div className="space-y-2">
              <p className="font-semibold text-sm text-primary">Explicação:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {question.explanation}
              </p>
            </div>
            <div className="flex justify-end pt-2">
              <Button onClick={handleNextQuestion} className="gap-2">
                {currentQuestion < quizQuestions.length - 1 ? "Próxima Questão" : "Ver Resultado"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
