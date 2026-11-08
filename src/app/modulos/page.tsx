import type { Metadata } from "next";
import Link from "next/link";
import { getModules } from "@/course";

export const metadata: Metadata = {
  title: "Módulos",
};

export default function ModulesPage() {
  const modules = getModules();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Módulos</h1>
      <ol className="mt-8 space-y-4">
        {modules.map((m, i) => (
          <li key={m.slug}>
            <Link
              href={`/modulos/${m.slug}`}
              className="block rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
            >
              <p className="text-sm text-zinc-500">Módulo {i + 1}</p>
              <h2 className="mt-1 text-xl font-semibold">{m.title}</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {m.description}
              </p>
              <p className="mt-3 text-sm text-zinc-500">
                {m.lessons.length} aulas
              </p>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
