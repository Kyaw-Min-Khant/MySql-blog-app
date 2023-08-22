import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import { Suspense } from "react";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import Home from "../pages/HomePage";
import EditPost from "../pages/EditPage";
import CreatePost from "../pages/CreatePage";
import PostDetail from "../pages/DetailPage";

const Router = () => {
  const route = createBrowserRouter([
    {
      path: paths.Login,
      element: (
        <Suspense fallback={""}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: paths.Register,
      element: (
        <Suspense fallback={""}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: paths.Home,
      element: (
        <Suspense fallback={""}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: paths.EditPost,
      element: (
        <Suspense fallback={""}>
          <EditPost />
        </Suspense>
      ),
    },
    {
      path: paths.CreatePost,
      element: (
        <Suspense fallback={""}>
          <CreatePost />
        </Suspense>
      ),
    },
    {
      path: paths.Detail,
      element: (
        <Suspense fallback={""}>
          <PostDetail />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={route} />;
};
export default Router;
