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

        const logo_label = document.createElement('div');
        logo_label.className = 'logo';

        const logo_title = document.createElement('h1');
        logo_title.className = 'title';
        logo_title.innerText = data.logo_title;
        
        const logo_artboard = document.createElement('p');
        logo_artboard.className = 'artboard';
        logo_artboard.innerText = data.web_title;

        logo_label.appendChild(logo_artboard,meta_label);
        logo_label.appendChild(logo_title,meta_label);
        brand_label.insertBefore(logo_label,meta_label);
        meta_label.innerText = '= ' + data.logo_description + ' =';

        return () => {
            brand_label.removeChild(logo_label);
            meta_label.innerText = '';
        };
    });

    return (
        <Layout />
    );
}

export default Home;