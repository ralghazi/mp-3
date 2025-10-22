import {createBrowserRouter, RouterProvider} from "react-router";
import Root from "./components/Root.tsx";
import GlobalStyles from "./GlobalStyles.tsx";


export default function App() {
    const router=createBrowserRouter(
        [
            {path:"*", Component:Root}
        ]
    );

    return (
        <>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </>
    )

}
