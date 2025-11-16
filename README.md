## 📁 Portfólio - Luiz Dev

Este repositório contém o **portfólio pessoal de Luiz Clovis**, desenvolvido com foco em **performance**, **organização de código** e **boa experiência do usuário**.

---

## 🎯 Sobre o Projeto

- **Apresentar habilidades** em desenvolvimento Front-end moderno;
- **Exibir experiências, projetos e skills** de forma clara e responsiva;
- Servir como **base escalável** para futuras melhorias (SEO, métricas, novas seções, etc.).

---

## 🧱 Estrutura do Projeto

A aplicação usa a **App Router** do Next.js (`src/app`) e uma arquitetura baseada em componentes, hooks e contextos:

```text
src/
├── app/
│   ├── (home)/page.tsx      # Página principal
│   ├── layout.tsx           # Layout raiz
│   └── globals.css          # Estilos globais
├── components/
│   ├── header/              # Cabeçalho
│   ├── footer/              # Rodapé
│   ├── sections/            # Seções da página (apresentação, skills, experiências, projetos)
│   ├── theme/               # Toggle de tema (claro/escuro)
│   ├── translate/           # Troca de idioma e textos
│   └── common/              # Componentes reutilizáveis (imagens, loading, links, etc.)
├── contexts/
│   └── LanguageContext.tsx  # Contexto global de idioma
├── hooks/
│   ├── usePortfolioData.ts  # Hook de dados do portfólio
│   ├── useOptimizedImage.ts # Hook de otimização de imagens
│   ├── useSmoothScroll.ts   # Scroll suave entre seções
│   └── useInitialLoad.ts    # Controle de carregamento inicial
├── services/                # Dados de skills, projetos e experiências
└── config/
    └── performance.ts       # Configurações de performance
```

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** (App Router);
- **React 18**;
- **TypeScript**;
- **Context API** (gerenciamento de idioma);
- **CSS Modules** para estilização;
- **React Icons** e **react-world-flags** para ícones e bandeiras.

---

## ⚙️ Principais Funcionalidades

- Seções de **apresentação**, **skills**, **experiências** e **projetos**;
- **Tema claro/escuro** com persistência;
- **Troca de idioma** (por meio de contexto e componentes de tradução);
- **Scroll suave** entre seções;
- **Imagens otimizadas** com lazy loading e hook dedicado;
- **Feedback de carregamento** na entrada da aplicação.

---

## 📦 Scripts Disponíveis

No diretório do projeto:

- `npm run dev` – inicia o servidor de desenvolvimento;
- `npm run build` – gera o build de produção;
- `npm start` – inicia o servidor com o build gerado;
- `npm run lint` – executa o linter.

---

## 🚀 Possíveis Evoluções

- Melhorias adicionais de SEO (Open Graph, sitemap, etc.);
- Testes automatizados (unitários e/ou e2e);
- Novas seções e projetos dinâmicos;
- Integrações com métricas de performance.


