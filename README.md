# Web Development Template

A lightweight GitHub repository template for creating **web development projects, experiments, prototypes, and learning projects**.

This template provides a clean development foundation with common tooling and sensible defaults. Frameworks, libraries, databases, and additional services can be added as required by each project.

## 🎯 Purpose

Use this template when starting projects involving:

- HTML

- CSS

- JavaScript

- Node.js

- React

- Next.js

- PostgreSQL

The goal is to start with a consistent development environment without filling every project with dependencies it does not need.

## ✨ Included

- ESLint

- Prettier

- Node.js configuration

- Environment variable support

- GitHub Actions CI

- VS Code configuration

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

6.  Clone it locally.

```bash
git clone git@github.com:amalk-au/web-development-template.git
cd web-development-template
npm install
```

Repositories created from this template are independent projects and do not inherit the template repository's Git history.

## 🛠️ Development Workflow

Common commands provided by the template:

```bash
npm run lint
npm run format
npm run format:check
npm test
```

The exact commands available may change as project-specific tooling is added.

## 🧱 Starting a Project

The template intentionally provides only the common foundation.

Add technologies according to the needs of the project.

### HTML / CSS / JavaScript

For smaller frontend experiments, work directly with the browser platform without introducing a framework unnecessarily.

### Node.js

For backend applications, APIs, scripts, and other server-side experiments, add the Node.js libraries required by the project.

For example:

```bash
npm install express
```

### React

For React projects, add React and the supporting tools required by the application.

Keep the base template framework-agnostic so simple projects do not inherit unnecessary dependencies.

### Next.js

For Next.js applications, use the current Next.js project setup and add Next.js-specific configuration when needed.

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

for a safe template that contains variable names but no real credentials.

Example:

```env
DATABASE_URL=
API_KEY=
JWT_SECRET=
```

The real `.env` file is excluded from Git.

## 🧪 Testing

Add testing tools according to the needs of each project.

Possible tools include:

- Jest

- Vitest

- React Testing Library

- Playwright

Testing is intentionally not tied to a single framework.

## 🗂️ Project Structure

A typical project may look like:

```text
.
├── .github/
│   └── workflows/
├── .vscode/
├── docs/
├── src/
├── tests/
├── .env.example
├── .editorconfig
├── .gitignore
├── .nvmrc
├── eslint.config.js
├── package.json
├── prettier.config.js
└── README.md
```

Projects can evolve their own structure as complexity increases.

For example:

```text
src/
├── components/
├── features/
├── hooks/
├── services/
├── styles/
└── utils/
```

## ✅ Code Quality

### ESLint

Run the linter with:

```bash
npm run lint
```

### Prettier

Format the project with:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

## 🤖 Continuous Integration

The template includes a GitHub Actions workflow that can be used to validate projects automatically.

CI can be extended to include:

- Dependency installation

- Linting

- Formatting checks

- Tests

- Production builds

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

These documents can contain:

- Setup instructions

- Learning notes

- Architecture decisions

- Useful commands

- Troubleshooting notes

- Technical references

## 📚 Recommended Resources

- [MDN Web Docs](https://developer.mozilla.org/)

- [Node.js Documentation](https://nodejs.org/docs/latest/api/)

- [React Documentation](https://react.dev/)

- [Next.js Documentation](https://nextjs.org/docs)

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

- [The Odin Project](https://www.theodinproject.com/)

## 💡 Guiding Principle

This template is intentionally **minimal and adaptable**.

Start with a clean foundation, then add only the technologies and dependencies the project actually needs.

> **Build the foundation once. Experiment freely. Keep each project independent.**

---

### Repository

**GitHub:** [amalk-au/web-development-template](https://github.com/amalk-au/web-development-template)
