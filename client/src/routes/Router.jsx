import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import { Suspense, lazy } from "react";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import PostDetail from "../pages/DetailPage";
import LoginRouteGuard from "../RouteGuard/LoginRouteGuard";
import OtherRouteGuard from "../RouteGuard/OtherRouteGuard";
import LoadingAnimation from "../Component/Animation/LoadingAnimation";
import ErrorPage from "../pages/ErrorPage";
const Home = lazy(() => import("../pages/HomePage"));
const EditPost = lazy(() => import("../pages/EditPage"));
const CreatePost = lazy(() => import("../pages/CreatePage"));
const Router = () => {
  const route = createBrowserRouter([
    {
      path: paths.Login,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <LoginRouteGuard>
            <Login />
          </LoginRouteGuard>
        </Suspense>
      ),
    },
    {
      path: paths.Register,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <LoginRouteGuard>
            <Register />
          </LoginRouteGuard>
        </Suspense>
      ),
    },
    {
      path: paths.Home,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: paths.EditPost,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <OtherRouteGuard>
            <EditPost />
          </OtherRouteGuard>
        </Suspense>
      ),
    },
    {
      path: paths.CreatePost,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <OtherRouteGuard>
            <CreatePost />
          </OtherRouteGuard>
        </Suspense>
      ),
    },
    {
      path: paths.Detail,
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <PostDetail />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<LoadingAnimation />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={route} />;
};
export default Router;
