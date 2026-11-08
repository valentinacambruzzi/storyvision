import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-4 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">StoryVision</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Aprenda storytelling com dados e transforme os seus dados em um roteiro
        de apresentação.
      </p>
      <p>
        <Link
          href="/modulos"
          className="inline-block rounded-md bg-zinc-900 px-4 py-2 font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Ver Módulos
        </Link>
      </p>
    </main>
  );
}
