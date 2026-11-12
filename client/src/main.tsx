import { createRoot, hydrateRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

const root = document.getElementById("root")!

// Built pages arrive prerendered; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <App />)
else createRoot(root).render(<App />)
