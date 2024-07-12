import { useEffect } from 'react';
import Layout from '../layout';

import './index.scss';
import data from '../config.json';


function Home()
{
    useEffect(() =>
    {
        const brand_label = document.getElementById('brand');
        const meta_label = brand_label.lastChild;

        const logo_title = document.createElement('h1');
        logo_title.className = 'title';
        logo_title.innerText = data.logo_title;
        
        const logo_artboard = document.createElement('p');
        logo_artboard.className = 'artboard';
        logo_artboard.innerText = data.web_title;

        brand_label.insertBefore(logo_artboard,meta_label);
        brand_label.insertBefore(logo_title,meta_label);
        meta_label.innerText = '= ' + data.logo_description + ' =';

        return () => {
            brand_label.removeChild(logo_artboard);
            brand_label.removeChild(logo_title);
            meta_label.innerText = '';
        };
    },[]);

    return (
        <Layout />
    );
}

export default Home;