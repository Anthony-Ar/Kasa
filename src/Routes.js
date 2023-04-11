import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Lodging from "./pages/Lodging";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";

export const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about-us',
            element: <AboutUs />
        },
        {
            path: '/lodging/:id',
            element: <Lodging />
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]);
}