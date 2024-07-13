import Header from './header';
import Waves from './waves';
import Main from './main';
import Footer from './footer';
import './root.scss';
import './initial.scss';

import { useEffect, useRef } from 'react';


function Layout()
{
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); },[]);
    const y_ref = useRef(null);

    const scroll_handle = () =>
    {
        const header = document.getElementById('header');
        if(undefined === header) { return; }

        const nav = document.getElementById('navigation');
        const toolbar = document.getElementById('toolbar');
        const sidebar = document.getElementById('sidebar');
        const y = y_ref.current;

        // console.log(y,' : ',window.scrollY,' : ',header.clientHeight);
        // console.log(window.scrollY > header.clientWidth);

        if (window.scrollY >= header.clientHeight)
        {
            const diff_y = y - window.scrollY;

            sidebar.classList.add('affix');
            nav.classList.add('show');
            if(diff_y < 0) 
            {
                nav.classList.remove('up');
                nav.classList.add('down'); 
            } 
            else if(diff_y > 0) 
            {
                nav.classList.remove('down');
                nav.classList.add('up'); 
            }

            // console.log(diff_y);
        } 
        else 
        { 
            nav.classList.remove('up');
            nav.classList.remove('down');
            nav.classList.remove('show');
            sidebar.classList.remove('affix');
        }

        if(window.scrollY > 0) 
        { 
            toolbar.classList.add('affix');

            const h1 = document.querySelector('main >.inner').offsetHeight;
            const h2 = window.innerHeight;
            const contentVisibilityHeight = h1 > h2 ? h1 - h2 : document.body.scrollHeight - h2;
            console.log(h1," ",h2," ",contentVisibilityHeight);
            
            const scroll_percent = Math.round(Math.min(100 * window.scrollY / contentVisibilityHeight, 100)) + '%';
            toolbar.lastElementChild.getElementsByTagName('span')[0].innerText = scroll_percent;
        }
        else { toolbar.classList.remove('affix'); }

        y_ref.current = window.scrollY;
    };

    useEffect(() => 
    {
        /**
         * requestAnimationFrame，
         * 可让浏览器能够优化动画的执行，减少不必要的计算和绘制，
         * 以此避免频繁执行滚动事件处理。
         * 再通过switcher限制了requestAnimationFrame的频繁创建。
        **/
        window.addEventListener('scroll',() => 
        {
            let switcher = true;
            if(switcher) 
            {
                window.requestAnimationFrame(() => 
                {
                    scroll_handle(null);
                    switcher = false; 
                });
                switcher = true;
            }
        });
    },[y_ref.current]);
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