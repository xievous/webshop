import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
