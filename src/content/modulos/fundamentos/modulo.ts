import type { ModuleDefinition } from "@/course/types";

// Slugs são identificadores estáveis (ADR 0001): não renomeie depois de publicar.
export const fundamentos: ModuleDefinition = {
  slug: "fundamentos",
  title: "Fundamentos de storytelling com dados",
  description:
    "O que separa um gráfico que informa de um que convence: contexto, escolha do visual, foco e estrutura narrativa.",
  lessons: [
    {
      slug: "o-que-e-storytelling-com-dados",
      title: "O que é storytelling com dados",
      load: () => import("./o-que-e-storytelling-com-dados.mdx"),
    },
    {
      slug: "publico-e-objetivo",
      title: "Comece pelo Público e pelo Objetivo",
      load: () => import("./publico-e-objetivo.mdx"),
    },
    {
      slug: "escolhendo-o-grafico",
      title: "Escolhendo o gráfico certo",
      load: () => import("./escolhendo-o-grafico.mdx"),
    },
    {
      slug: "foco-e-clareza",
      title: "Menos ruído, mais foco",
      load: () => import("./foco-e-clareza.mdx"),
    },
    {
      slug: "estrutura-da-narrativa",
      title: "Começo, meio e fim",
      load: () => import("./estrutura-da-narrativa.mdx"),
    },
  ],
};
