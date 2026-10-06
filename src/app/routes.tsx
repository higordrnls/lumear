import { createBrowserRouter } from "react-router"
import Layout from "./components/Layout"
import Architecture from "./pages/Architecture"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Morar from "./pages/Morar"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Research from "./pages/Research"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "morar", Component: Morar },
      { path: "arquitetura", Component: Architecture },
      { path: "pesquisa", Component: Research },
      { path: "projetos", Component: Projects },
      { path: "contato", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
])
