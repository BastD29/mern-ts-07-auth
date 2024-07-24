import { FC, LazyExoticComponent, lazy } from "react";
import { RouteObject } from "react-router-dom";

const DashboardLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/DashboardLayout/DashboardLayout")
);
const Home: LazyExoticComponent<FC> = lazy(() => import("../pages/Home/Home"));
const AuthLayout: LazyExoticComponent<FC> = lazy(
  () => import("../components/layouts/AuthLayout/AuthLayout")
);
const Login: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Login/Login")
);
const NotFound: LazyExoticComponent<FC> = lazy(
  () => import("../pages/NotFound/NotFound")
);
const Success: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Success/Success")
);
const Verify: LazyExoticComponent<FC> = lazy(
  () => import("../pages/Verify/Verify")
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> }, // page where user inserts email
      { path: "success", element: <Success /> }, // page telling user to check his in mail with a link to click
      { path: "verify", element: <Verify /> }, // page getting and verifying the token
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
