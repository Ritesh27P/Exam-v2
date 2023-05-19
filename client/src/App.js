import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from "./pages/Login"
const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Hii</h1>
    },
    {
        path: "/login",
        element: <Login />
    }
])

const App = ()=> {

    return (
        <div>
            <h1>This is App</h1>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;