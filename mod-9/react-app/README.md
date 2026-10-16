# React Setup (with Vite)

### Step 1: Create the Project

In your terminal, run the following command:

```bash
npm create vite@latest
```

When prompted, select the following options using your arrow keys and **Enter**:

* **Project name:** `whatever-my-project-is-called`
* **Select a framework:** `React`
* **Select a variant:** `JavaScript`
* **Which linter to use:** `Oxlint`
* **Install with npm and start:** `Yes`

---

### Step 2: Access the Development Server

Once the project is generated, open your browser and go to:

> **[http://localhost:5173/](http://localhost:5173/)**

* **Stop the server:** Press `Ctrl + C` in your terminal.
* **Restart the server:** Run `npm run dev`.

---

### Step 3: Clean Up and Create a Simple Component

1. Open the project folder in your code editor.
2. Clear out all the existing code inside `App.css`, `index.css`, and `App.jsx` *(keep the files, just make them blank)*.
3. Replace the content of `App.jsx` with the following component:

```jsx
export default function App() {
  return (
    <div>Hello World</div>
  );
}
```

You're ready to go!