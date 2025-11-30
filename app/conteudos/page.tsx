"use client";

import { contentData } from "@/lib/data";
import { BookOpen, Activity, ShieldCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Conteudos() {
  const getIcon = (id: string) => {
    switch (id) {
      case "ciclo-biologico": return <BookOpen className="w-4 h-4 mr-2" />;
      case "sintomas": return <Activity className="w-4 h-4 mr-2" />;
      case "diagnostico-tratamento": return <ShieldCheck className="w-4 h-4 mr-2" />;
      default: return <BookOpen className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Material de Estudo</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore os módulos detalhados sobre Ascaridíase, organizados para facilitar seu aprendizado.
        </p>
      </div>

      <Tabs defaultValue={contentData[0].id} className="w-full flex flex-col md:flex-row gap-8">
        <TabsList className="flex md:flex-col h-auto w-full md:w-64 bg-muted/50 p-1 gap-1 justify-start">
          {contentData.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="w-full justify-start px-4 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {getIcon(item.id)}
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1">
          {contentData.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <Card>
                <CardHeader className="border-b bg-muted/10">
                  <CardTitle className="text-2xl text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[600px] w-full p-6 md:p-8">
                    <div className="prose prose-slate prose-lg max-w-none dark:prose-invert">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
