import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule, getModules } from "@/course";

// Com cacheComponents, `dynamicParams = false` não é suportado:
// slugs desconhecidos são tratados com notFound().
export function generateStaticParams() {
  return getModules().map((m) => ({ modulo: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/modulos/[modulo]">): Promise<Metadata> {
  const { modulo } = await params;
  const mod = getModule(modulo);
  return mod ? { title: mod.title, description: mod.description } : {};
}

export default async function ModulePage({
  params,
}: PageProps<"/modulos/[modulo]">) {
  const { modulo } = await params;
  const mod = getModule(modulo);
  if (!mod) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <Link href="/modulos" className="text-sm text-zinc-500 hover:underline">
        ← Módulos
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        {mod.title}
      </h1>
      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        {mod.description}
      </p>

      <h2 className="mt-10 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Aulas
      </h2>
      <ol className="mt-4 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {mod.lessons.map((lesson, i) => (
          <li key={lesson.slug}>
            <Link
              href={`/modulos/${mod.slug}/${lesson.slug}`}
              className="flex gap-4 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <span className="w-6 text-right tabular-nums text-zinc-400">
                {i + 1}
              </span>
              <span className="font-medium">{lesson.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
