import { createBrowserRouter } from "react-router-dom";
import HomePgae from "./pages/HomePage";
import Profile from "./pages/Profile";
const routers = createBrowserRouter([
    { path: 'youtube/:idVideo', element: <HomePgae /> },
    { path: '', element: <Profile /> }

])
export default routers