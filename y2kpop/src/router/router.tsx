import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Details from "../pages/Details/Details";
import Overview from "../pages/Overview/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/details/:productId",
    element: <Details />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
]);

export default router;
