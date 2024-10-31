import React from "react";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Courses from "./pages/courses/Courses";
import Blog from "./pages/blog/Blog";
import Projects from "./pages/projects/Projects";
import Videos from "./pages/videos/Videos";
import AboutPage from "./pages/about/About";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/videos",
          element: <Videos />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
