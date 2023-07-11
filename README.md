# UNRION WEB FRONTEND MONOREPO

unriʘn web frontend apps monorepo powered by turborepo.

## Package manager

This monorepo uses [pnpm](https://pnpm.io) as a package manager, pnpm installation instruction can be found [here](https://pnpm.io/installation).

## Tech Stack

- [React](https://reactjs.org)
- [Next](https://nextjs.org)
- [Typescript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)

## Getting Started

1. Install dependencies

```bash
pnpm i
```

2. Run the app in the development mode

```bash
pnpm run dev
```

## Whats inside

This Monorepo includes the following apps & packages:

- `account`: Manages user authentication, account/profile management. See [README](/apps/account/README.md).
- `website`: Marketing site / Landing page. See [README](/apps/account/README.md).
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com) shared by all apps. See [README](/packages/ui/README.md).
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`). See [README](/packages/eslint-config-custom/README.md).
- `tailwind-config`: `tailwind-config` shared by all apps. See [README](/packages/tailwind-config/README.md).
- `tsconfig`: `tsconfig.json`s used throughout the monorepo. See [README](/packages/tsconfig/README.md).

Each app/package is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

This Monorepo has these utility tools already setup:

- [TypeScript](https://www.typescriptlang.org) for static type checking
- [Tailwind CSS](https://tailwindcss.com) for styles
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting

## Naming convention

- <ins>**File**</ins>: Use kebab-case for file names. E.g., `dashboard-page.tsx`.
- <ins>**Folder**</ins>: Use kebab-case for folder names. E.g., `api-requests`.
- <ins>**Constants**</ins>: Use CAPITALIZED_SNAKE_CASE for constant names. E.g., `const DATE_NOW = new Date()`.
- <ins>**Variables**</ins>: Use camelCase for variable names. E.g., `let startDate = new Date()`.
- <ins>**Functions**</ins>: Use camelCase for function names. E.g., `let getHoverSate = () => {}`.

## Additional Information

- Write less comments by using descriptive function/class names.
- Use arrow functions as much as possible.
- Uses absolute imports set in the [tsconfig](/tsconfig.json) file in each app/package
- Use semantic html as much as possible.
- Use [React icons library](https://react-icons.github.io/react-icons/) for any icons as much as possible.
- Before creating any pages or sections, confirm if the page or section is static (not based on data from the DB) and create the contents in [Sanity](https://www.sanity.io/) first before proceeding to create the page.
- Sanity uses [GROQ](https://groq.dev/) for query transactions, check out the [overview](https://www.sanity.io/docs/overview-groq)
- (optional) You can install these VSCode extensions for intellisense, documentation and code formatting
  -- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - Intellisense
  -- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Formatting
  -- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Intellisense
  -- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Intellisense
  -- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Formatting
  -- [Bloop](https://marketplace.visualstudio.com/items?itemName=bloop.bloop) - Documenation

## Resources

- [Typescript docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS docs](https://tailwindcss.com/docs/installation)
