import type { MDXComponents } from "mdx/types";

// Componentes disponíveis em todas as Aulas sem import.
function Dica({ children }: { children: React.ReactNode }) {
  return (
    <aside className="not-prose my-6 rounded-lg border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-zinc-800 dark:bg-amber-950/40 dark:text-zinc-200">
      <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
        Dica
      </p>
      <div className="space-y-2 [&_strong]:font-semibold">{children}</div>
    </aside>
  );
}

const components = {
  Dica,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
