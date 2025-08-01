
# 🛠️ Contributing to Create React App (CRA)

This guide helps you set up the [Create React App](https://github.com/facebook/create-react-app) monorepo locally and start contributing — works on **Linux and macOS**.

---

## 📦 Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+ recommended)
- **Yarn (Classic)** – not npm or pnpm  
  ```bash
  corepack enable
  corepack prepare yarn@1.22.19 --activate
````

* **Git** (for cloning)
* **Python 2 or 3** (some dependencies need it)

---

## 🚀 Clone the Repository

```bash
git clone https://github.com/facebook/create-react-app.git
cd create-react-app
```

---

## 📁 Install Dependencies

CRA uses a **monorepo** with multiple packages managed by Yarn workspaces.

```bash
yarn
```

This installs all dependencies across the workspace.

---

## 🧪 Run Tests

To ensure everything works:

```bash
yarn test
```

---

## 🧱 Start Developing

Navigate to the `packages/` folder to find sub-packages like:

* `react-scripts/` – the core scripts used in CRA projects
* `create-react-app/` – the CLI tool
* `cra-template/` – the default project template

Edit code and test locally.

---

## 🔄 Link Local Packages (Optional)

If you're testing changes to `react-scripts`, link it locally:

1. Build CRA:

   ```bash
   yarn build
   ```

2. Create a test app:

   ```bash
   cd ..
   npx create-react-app my-app --scripts-version file:/full/path/to/create-react-app/packages/react-scripts
   cd my-app
   yarn start
   ```

---

## 📦 Build Packages

To rebuild the packages after making changes:

```bash
yarn build
```

---

## 🧹 Lint and Format

Run ESLint:

```bash
yarn lint
```

Format with Prettier:

```bash
yarn prettier
```

---

## 🤝 Contributing Guidelines

* Follow [Facebook’s Code of Conduct](https://code.fb.com/codeofconduct/)
* Open issues for discussions before large changes
* Run tests and lint before submitting PRs

---

## 📚 Useful Docs

* [CRA Contributing Guide](https://github.com/facebook/create-react-app/blob/main/CONTRIBUTING.md)
* [CRA Architecture Overview](https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/template/README.md)
* [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)

---

## ❤️ Community

Join the discussion on [GitHub Issues](https://github.com/facebook/create-react-app/issues) and [Discussions](https://github.com/facebook/create-react-app/discussions).

---
 

 
