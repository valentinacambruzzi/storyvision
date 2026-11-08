import type { MDXContent } from "mdx/types";

/**
 * Slugs são o identificador estável de Módulos e Aulas (ADR 0001):
 * aparecem na URL e, a partir da etapa 4, serão referenciados por
 * Respostas e Progresso no banco. Não renomeie um slug já publicado.
 */
export type Slug = string;

export type LessonDefinition = {
  slug: Slug;
  title: string;
  load: () => Promise<{ default: MDXContent }>;
};

export type ModuleDefinition = {
  slug: Slug;
  title: string;
  description: string;
  /** Ordem em que as Aulas aparecem no Módulo. */
  lessons: LessonDefinition[];
};
