This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Documentação

Banco de dados --> DATABASE_URL="postgresql://postgres@localhost:5432/postgres?schema=public"
Container criado para hospedar o banco de dados PostgresSQL --> docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres

Prisma:
Instalar o Prisma CLI como dependência de desenvolvimento --> npm install prisma --save-dev
Executar os pacotes do prisma --> npx prisma
Criar e aplicar as migrations --> npx prisma migrate dev --name init
Gera os dados definidos no prisma/schema.prisma --> npx prisma generate
Preenche o banco de dados com um conjunto inicial de dados --> npx prisma db seed
Criar em package.json --> "prisma": { "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts" }

Pasta src:
Na pasta app ficam localizadas as rotas das páginas. Cada pasta com o arquivo page.tsx indica o index de cada rota, ou seja, a página que será acessada ao navegarmos ate determinada rota.
Em /api ficam localizadas as autenticações do usuário e as manipulações ao banco de dados.
Em /components ficam os componentes utilizados no código.

Links úteis:
NextJS --> https://nextjs.org/
NextAuth --> https://next-auth.js.org/ && https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/
Prisma --> https://www.prisma.io/
