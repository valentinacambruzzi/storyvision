# Next.js, Postgres e Vercel

A reescrita usa Next.js (App Router) com TypeScript, Postgres gerenciado (Neon ou Supabase) acessado via Drizzle, e deploy na Vercel. O objetivo é um projeto de portfólio com uma demo pública: um só projeto e um só deploy, em vez da versão anterior com HTML/JS puro, Express e MySQL local, que não era publicável e não tinha autenticação no servidor.

## Considered Options

- Manter Express + HTML/JS puro: menos coisas para aprender, mas difícil de publicar e de proteger.
- React (Vite) + API Express separada: dois deploys e mais configuração sem ganho para o escopo.
