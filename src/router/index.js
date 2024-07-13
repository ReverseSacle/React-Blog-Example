import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import Home from '../home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '*',
        element: <Layout />
    }
]);

export default router;
