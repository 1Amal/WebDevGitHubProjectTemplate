# Web Development Template

A lightweight **GitHub repository template** for creating web development projects, experiments, prototypes, and learning projects.

The template provides a consistent development foundation with essential tooling and sensible defaults. Frameworks, libraries, databases, and additional services can be added as required by each project.

## 🎯 Purpose

Use this template as a starting point for projects involving:

- HTML

- CSS

- JavaScript

- TypeScript

- Node.js

- React

- Next.js

- PostgreSQL

The goal is to provide a consistent starting point without forcing every project to use the same framework, architecture, or dependencies.

## ✨ Included

- **Node.js 24**

- **pnpm** package manager

- **TypeScript**

- **Vite** for frontend development and production builds

- **ESLint** and **typescript-eslint** for code quality

- **Prettier** for consistent formatting

- **Vitest** for testing

- **EditorConfig** for consistent editor settings

- **Environment variable support**

- **GitHub Actions CI**

- **VS Code configuration**

- Common `.gitignore` rules

- Basic project structure

- Documentation space for project-specific notes

## 🚀 Using the Template

This repository is configured as a **GitHub Template Repository**.

To create a new project:

1.  Open this repository on GitHub.

2.  Select **Use this template**.

3.  Select **Create a new repository**.

4.  Enter the name of your new project.

5.  Create the repository.

6.  Clone the new repository locally.

```bash
git clone git@github.com:YOUR-USERNAME/YOUR-NEW-REPOSITORY.git
cd YOUR-NEW-REPOSITORY
```

The template uses **Node.js 24** and **pnpm**.

Verify your environment:

```bash
node --version
pnpm --version
```

Install dependencies:

```bash
pnpm install
```

Repositories created from this template are independent projects and do not inherit the template repository's Git history.

## 🛠️ Development Workflow

Common commands provided by the template:

```bash
pnpm dev
pnpm typecheck
pnpm lint
pnpm format
pnpm format:check
pnpm test
pnpm test:watch
pnpm test:coverage
pnpm build
pnpm preview
pnpm security:audit
```

### Local Development

For frontend projects using Vite:

```bash
pnpm dev
```

This starts the Vite development server.

Open the local URL displayed in the terminal, normally similar to:

```text
http://localhost:5173
```

Do not open `index.html` directly with `file://`. Modern browser features such as ES modules are intended to run through a local HTTP development server.

Projects using frameworks such as React or Next.js can use their own development server once those technologies are introduced.

### Type Checking

Run TypeScript without generating JavaScript files:

```bash
pnpm typecheck
```

The template uses TypeScript for type checking while Vite handles frontend transformation and production bundling.

### Production Build

Create an optimized production build:

```bash
pnpm build
```

The generated files are placed in:

```text
dist/
```

The `dist/` directory contains the production-ready frontend assets and is excluded from Git.

### Previewing the Production Build

After building:

```bash
pnpm preview
```

This starts a local server using the production build so it can be tested before deployment.

## 🧱 Starting a Project

The template intentionally provides only the common foundation.

Add technologies according to the requirements of each project.

### HTML / CSS / JavaScript / TypeScript

For smaller frontend experiments, work directly with the browser platform without introducing a framework unnecessarily.

The default frontend structure is:

```text
.
├── index.html
└── src/
    ├── assets/
    ├── css/
    └── js/
```

A typical project may grow into:

```text
.
├── index.html
└── src/
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── fonts/
    ├── css/
    │   ├── main.css
    │   └── ...
    └── js/
        ├── main.ts
        ├── components/
        ├── services/
        └── utils/
```

Keep the structure as simple as the project allows.

### Node.js

For backend applications, APIs, command-line tools, and server-side experiments, add the libraries required by the project.

For example:

```bash
pnpm add express
```

### React

For React projects, add React and the supporting tooling required by the application.

Keep the base template framework-agnostic so simple projects do not inherit unnecessary dependencies.

### Next.js

For Next.js applications, use the current Next.js project setup and add Next.js-specific dependencies and configuration when needed.

### PostgreSQL

For projects that require relational data, PostgreSQL can be added as a local or containerized development service.

Keep database credentials and other secrets outside source control.

## 🔐 Environment Variables & Secrets

Never commit passwords, API keys, access tokens, private keys, or other secrets.

Use:

```text
.env
```

for local configuration and:

```text
.env.example
```

for a safe template containing variable names without real credentials.

Example:

```env
DATABASE_URL=
API_KEY=
JWT_SECRET=
```

The real `.env` file is excluded from Git.

## 🧪 Testing

Testing should be selected according to the needs of each project.

The base template includes **Vitest** as the default test runner.

Common testing tools that can be added as required include:

- Jest

- React Testing Library

- Playwright

Choose the tools that best fit the application rather than adding every testing framework by default.

Run the existing test suite with:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Generate a coverage report:

```bash
pnpm test:coverage
```

## 🗂️ Project Structure

A typical project created from this template may look like:

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── docs/
│   └── README.md
├── public/
├── src/
│   ├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.ts
├── tests/
│   └── example.test.ts
├── .env.example
├── .editorconfig
├── .gitignore
├── .nvmrc
├── .prettierignore
├── eslint.config.mjs
├── index.html
├── package.json
├── pnpm-lock.yaml
├── prettier.config.mjs
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

Projects can evolve their own structure as complexity increases.

For example, a larger application might organize source code as:

```text
src/
├── components/
├── features/
├── hooks/
├── services/
├── styles/
└── utils/
```

The structure should reflect the needs of the application rather than following a fixed convention.

## ✅ Code Quality

### ESLint

ESLint and `typescript-eslint` help identify potential problems and enforce code-quality rules.

Run the linter with:

```bash
pnpm lint
```

### Prettier

Prettier keeps formatting consistent across the project.

Format the project:

```bash
pnpm format
```

Check formatting without modifying files:

```bash
pnpm format:check
```

### EditorConfig

EditorConfig provides consistent basic editor behaviour across different development environments.

The project includes an `.editorconfig` file defining conventions such as:

- UTF-8 encoding

- LF line endings

- Spaces for indentation

- Final newline

- Trailing whitespace handling

## 🤖 Continuous Integration

The template includes a GitHub Actions workflow for basic project validation.

The CI workflow validates:

- Dependency installation

- Formatting

- Type checking

- Linting

- Tests

- Production builds

The goal is to catch problems automatically before changes are merged.

## 🔒 Dependency Security

Run a dependency security audit with:

```bash
pnpm security:audit
```

Review reported vulnerabilities before updating or introducing dependencies.

Keep the dependency tree as small as practical and add libraries only when they provide clear value to the project.

## 📝 Documentation

Use the `docs/` directory for project-specific notes and technical documentation.

For example:

```text
docs/
├── javascript.md
├── node.md
├── react.md
├── nextjs.md
└── postgresql.md
```

Documentation can contain:

- Setup instructions

- Learning notes

- Architecture decisions

- Useful commands

- Troubleshooting notes

- Technical references

## 📚 Recommended Resources

- [MDN Web Docs](https://developer.mozilla.org/)

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)

- [pnpm Documentation](https://pnpm.io/)

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

- [Vite Documentation](https://vite.dev/)

- [React Documentation](https://react.dev/)

- [Next.js Documentation](https://nextjs.org/docs)

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

- [The Odin Project](https://www.theodinproject.com/)

## 💡 Guiding Principle

This template is intentionally **minimal and adaptable**.

Start with a clean foundation, then add only the technologies and dependencies the project actually needs.

> **Build the foundation once. Experiment freely. Keep each project independent.**

---

### Repository

**GitHub:** [amalk-au/web-development-template](https://github.com/amalk-au/web-development-template)
