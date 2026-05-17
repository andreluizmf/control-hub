# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ControlHub – Painel de Serviços Digitais

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End utilizando Bootstrap + React + Lucide.

---

## Colaboradores do Projeto

- André Luiz Martins Fávero
- Guilherme Otto de Souza Leal

---

## Descrição do Projeto

O **ControlHub** é uma aplicação front-end que simula o painel de serviços digitais de uma startup de gestão empresarial. A interface apresenta os principais módulos da plataforma, métricas de uso, diferenciais competitivos e navegação completa.

A proposta demonstra o uso de **React com Vite**, componentização com props, Design System com Bootstrap, ícones com Lucide React e responsividade, construindo uma interface moderna.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.x | Biblioteca de interface |
| Vite | 5.x | Bundler e servidor de desenvolvimento |
| Bootstrap | 5.3 | Grid, layout e utilitários CSS |
| Lucide React | 1.16 | Biblioteca de ícones |
| Google Fonts | — | Fontes Syne e DM Sans |

---

## Como Executar

**Pré-requisito:** Node.js 18 ou superior instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/andreluizmf/control-hub.git

# 2. Acesse a pasta
cd control-hub

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
