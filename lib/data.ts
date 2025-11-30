export const quizQuestions = [
  {
    id: 1,
    question: "Qual é o agente etiológico da Ascaridíase?",
    options: [
      "Taenia solium",
      "Ascaris lumbricoides",
      "Schistosoma mansoni",
      "Ancylostoma duodenale",
    ],
    correctAnswer: 1,
    explanation:
      "O Ascaris lumbricoides, popularmente conhecido como lombriga, é o nematoide causador da ascaridíase.",
  },
  {
    id: 2,
    question: "Como ocorre a transmissão principal da Ascaridíase?",
    options: [
      "Picada de inseto vetor",
      "Penetração ativa na pele",
      "Ingestão de água ou alimentos contaminados com ovos",
      "Contato direto pessoa a pessoa",
    ],
    correctAnswer: 2,
    explanation:
      "A infecção ocorre pela ingestão de ovos infectantes presentes em água ou alimentos contaminados (ciclo fecal-oral).",
  },
  {
    id: 3,
    question: "Qual órgão é percorrido pelas larvas durante o Ciclo de Loss?",
    options: [
      "Coração e Pulmões",
      "Rins e Bexiga",
      "Cérebro e Medula",
      "Fígado e Pâncreas apenas",
    ],
    correctAnswer: 0,
    explanation:
      "No Ciclo de Loss, as larvas migram do intestino para o fígado, coração e pulmões, antes de retornarem ao intestino para a fase adulta.",
  },
  {
    id: 4,
    question:
      "Qual sintoma pulmonar é característico da fase de migração larvária?",
    options: [
      "Tosse seca e Síndrome de Loeffler",
      "Diarreia intensa",
      "Dor abdominal aguda",
      "Anemia profunda",
    ],
    correctAnswer: 0,
    explanation:
      "A passagem das larvas pelos pulmões pode causar tosse, febre e eosinofilia, quadro conhecido como Síndrome de Loeffler.",
  },
  {
    id: 5,
    question:
      "Qual é a principal medida profilática para evitar a Ascaridíase?",
    options: [
      "Uso de repelentes",
      "Vacinação anual",
      "Saneamento básico e higiene pessoal",
      "Uso de calçados fechados",
    ],
    correctAnswer: 2,
    explanation:
      "Saneamento básico adequado, lavar as mãos e higienizar alimentos são as medidas mais eficazes de prevenção.",
  },
];

export const flashcardsData = [
  {
    id: 1,
    front: "Agente Etiológico",
    back: "Ascaris lumbricoides (Nematoda)",
  },
  {
    id: 2,
    front: "Habitat no Hospedeiro",
    back: "Intestino Delgado (Jejuno e Íleo)",
  },
  {
    id: 3,
    front: "Forma Infectante",
    back: "Ovo contendo larva L3",
  },
  {
    id: 4,
    front: "Ciclo de Loss",
    back: "Migração larvária: Intestino -> Fígado -> Coração -> Pulmões -> Traqueia -> Faringe -> Intestino",
  },
  {
    id: 5,
    front: "Síndrome de Loeffler",
    back: "Pneumonia eosinofílica transitória causada pela passagem das larvas nos pulmões (tosse, febre, dispneia)",
  },
  {
    id: 6,
    front: "Diagnóstico Laboratorial",
    back: "Exame parasitológico de fezes (EPF) - Métodos de Hoffman, Kato-Katz",
  },
  {
    id: 8,
    front: "Complicação Grave",
    back: "Obstrução intestinal (bolo de áscaris) ou migração errática (colédoco, apêndice)",
  },
];

export const contentData = [
  {
    id: "ciclo-biologico",
    title: "Ciclo Biológico",
    content: `Ciclo de Vida do Ascaris lumbricoides

O ciclo de vida do Ascaris lumbricoides é do tipo monoxênico (apenas um hospedeiro).

1. Infecção
Ocorre pela ingestão de ovos contendo a larva infectante (L3) em água ou alimentos contaminados.

2. Eclosão
No intestino delgado, as larvas eclodem.

3. Migração (Ciclo de Loss)
As larvas perfuram a parede intestinal, caem na circulação e passam pelo fígado e coração, chegando aos pulmões.

4. Fase Pulmonar
Nos alvéolos, sofrem mudas (L3 -> L4), sobem a árvore brônquica até a faringe, são deglutidas e voltam ao intestino.

5. Fase Adulta
No intestino delgado, tornam-se adultos (L5), copulam e as fêmeas liberam milhares de ovos por dia, que saem nas fezes para contaminar o ambiente.`,
  },
  {
    id: "sintomas",
    title: "Sintomas e Patogenia",
    content: `Manifestações Clínicas da Ascaridíase

A ascaridíase pode ser assintomática, mas infecções maciças causam quadros graves.

Fase Larvária (Pulmonar)
- Síndrome de Loeffler: tosse seca, dispneia, febre baixa e eosinofilia no sangue
- Reações alérgicas cutâneas
- Mal-estar geral

Fase Adulta (Intestinal)
- Dor abdominal difusa
- Náuseas e vômitos
- Desnutrição (espoliação de nutrientes pelo parasito)

Complicações Graves
- Obstrução intestinal: "bolo de áscaris"
- Volvo e perfuração
- Migração para vias biliares: colangite
- Pancreatite: quando migra para o pâncreas`,
  },
  {
    id: "diagnostico-tratamento",
    title: "Diagnóstico e Tratamento",
    content: `Diagnóstico e Manejo da Ascaridíase

Diagnóstico Clínico
- Anamnese detalhada
- Sintomas (eliminação de vermes pela boca ou ânus)
- Histórico epidemiológico

Diagnóstico Laboratorial
- Exame parasitológico de fezes (EPF)
- Métodos de sedimentação espontânea (Hoffman)
- Métodos quantitativos (Kato-Katz)
- Pesquisa de ovos nas fezes`,
  },
  {
    id: "transmissao",
    title: "Transmissão",
    content: `Transmissão da Ascaridíase

A transmissão ocorre principalmente por via fecal-oral, a partir de ovos eliminados nas fezes de indivíduos infectados.

Principais formas de transmissão
- Ingestão de ovos embrionados presentes em água ou alimentos contaminados
- Contato com solo contaminado com fezes humanas
- Má higiene das mãos, especialmente em crianças
- Ingestão de frutas, legumes e verduras crus mal higienizados`,
  },
  {
    id: "prevencao",
    title: "Prevenção",
    content: `Prevenção da Ascaridíase

Medidas básicas de prevenção
- Saneamento básico adequado
- Higiene pessoal (lavar as mãos com água e sabão)
- Lavagem correta de frutas, legumes e verduras
- Uso de água tratada para consumo
- Evitar defecação a céu aberto
- Tratamento dos doentes para quebrar a cadeia de transmissão
- Educação sanitária em comunidades de risco`,
  },
];
