import type { MDXContent } from "mdx/types";
import { fundamentos } from "@/content/modulos/fundamentos/modulo";
import type { ModuleDefinition, Slug } from "./types";

/** Ordem em que os Módulos aparecem no curso. */
const modules: ModuleDefinition[] = [fundamentos];

export type LessonSummary = { slug: Slug; title: string };

export type ModuleSummary = {
  slug: Slug;
  title: string;
  description: string;
  lessons: LessonSummary[];
};

export type Lesson = LessonSummary & {
  module: ModuleSummary;
  Content: MDXContent;
  previous: LessonSummary | null;
  next: LessonSummary | null;
};

function summarize(mod: ModuleDefinition): ModuleSummary {
  return {
    slug: mod.slug,
    title: mod.title,
    description: mod.description,
    lessons: mod.lessons.map(({ slug, title }) => ({ slug, title })),
  };
}

export function getModules(): ModuleSummary[] {
  return modules.map(summarize);
}

export function getModule(moduleSlug: Slug): ModuleSummary | null {
  const mod = modules.find((m) => m.slug === moduleSlug);
  return mod ? summarize(mod) : null;
}

export async function getLesson(
  moduleSlug: Slug,
  lessonSlug: Slug,
): Promise<Lesson | null> {
  const mod = modules.find((m) => m.slug === moduleSlug);
  if (!mod) return null;

  const index = mod.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return null;

  const lesson = mod.lessons[index];
  const { default: Content } = await lesson.load();
  const summary = summarize(mod);

  return {
    slug: lesson.slug,
    title: lesson.title,
    module: summary,
    Content,
    previous: summary.lessons[index - 1] ?? null,
    next: summary.lessons[index + 1] ?? null,
  };
}

/** Todos os pares Módulo/Aula, para prerenderizar no build. */
export function getLessonParams(): { modulo: Slug; aula: Slug }[] {
  return modules.flatMap((m) =>
    m.lessons.map((l) => ({ modulo: m.slug, aula: l.slug })),
  );
}
