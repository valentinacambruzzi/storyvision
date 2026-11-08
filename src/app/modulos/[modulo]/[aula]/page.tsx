import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, getLessonParams } from "@/course";

// Com cacheComponents, `dynamicParams = false` não é suportado:
// slugs desconhecidos são tratados com notFound().
export function generateStaticParams() {
  return getLessonParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/modulos/[modulo]/[aula]">): Promise<Metadata> {
  const { modulo, aula } = await params;
  const lesson = await getLesson(modulo, aula);
  return lesson ? { title: `${lesson.title} · ${lesson.module.title}` } : {};
}

export default async function LessonPage({
  params,
}: PageProps<"/modulos/[modulo]/[aula]">) {
  const { modulo, aula } = await params;
  const lesson = await getLesson(modulo, aula);
  if (!lesson) notFound();

  const { Content, module: mod, previous, next } = lesson;
  const position = mod.lessons.findIndex((l) => l.slug === lesson.slug) + 1;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <Link
        href={`/modulos/${mod.slug}`}
        className="text-sm text-zinc-500 hover:underline"
      >
        ← {mod.title}
      </Link>
      <p className="mt-6 text-sm text-zinc-500">
        Aula {position} de {mod.lessons.length}
      </p>

      <article className="prose prose-zinc mt-2 max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight">
        <h1>{lesson.title}</h1>
        <Content />
      </article>

      <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
        {previous ? (
          <Link
            href={`/modulos/${mod.slug}/${previous.slug}`}
            className="hover:underline"
          >
            <span className="block text-zinc-500">← Anterior</span>
            {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/modulos/${mod.slug}/${next.slug}`}
            className="text-right hover:underline"
          >
            <span className="block text-zinc-500">Próxima →</span>
            {next.title}
          </Link>
        ) : (
          <Link
            href={`/modulos/${mod.slug}`}
            className="text-right hover:underline"
          >
            <span className="block text-zinc-500">Fim do Módulo</span>
            Voltar ao Módulo
          </Link>
        )}
      </nav>
    </main>
  );
}
