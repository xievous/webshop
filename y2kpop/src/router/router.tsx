import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Details from "../pages/Details/Details";
import Overview from "../pages/Overview/Overview";
import Checkout from "../pages/Checkout/Checkout";
import Confirmation from "../pages/Confirmation/Confirmation";

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
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

export default router;
