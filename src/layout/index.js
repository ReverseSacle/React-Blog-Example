import Header from './header';
import Waves from './waves';
import Main from './main';
import Footer from './footer';
import './root.scss';

import { useEffect } from 'react';


function Layout()
{
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); },[]);

    return (
        <>
            <Header />
            <Waves />
            <Main />
            <Footer />
        </>
    );
}

export default Layout;