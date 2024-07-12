import { createBrowserRouter } from 'react-router-dom';
import Article from '../article';
import Layout from '../layout';
import Home from '../home';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/article',
        element: <Article />
    },
    {
        path: '*',
        element: <Layout />
    }
]);

export default router;
