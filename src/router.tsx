import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { SearchPage } from "./pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },

    {
        path: "/search",
        element: <SearchPage />,
    },
]);