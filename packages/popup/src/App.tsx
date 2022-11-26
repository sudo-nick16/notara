import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Bookmarks from "./components/Bookmarks"
import Layout from "./components/Layout"
import Notes from "./components/Notes"

const App = () => {
    const currentPath = document.location.pathname;
    console.log(currentPath);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Notes />,
                },
                {
                    path: "notes",
                    element: <Notes />,
                },
                {
                    path: "bookmarks",
                    element: <Bookmarks />,
                }
            ]
        }
    ], {
            basename: currentPath
        })
    return <RouterProvider router={router} />
}

export default App
