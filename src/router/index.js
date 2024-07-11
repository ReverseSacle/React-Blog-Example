import { createBrowserRouter } from 'react-router-dom';
import Article from '../article';
import Layout from '../layout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    },
    {
        path: '/article',
        element: <Article />
    }
]);

export default router;
