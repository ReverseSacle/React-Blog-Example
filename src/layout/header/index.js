import NavigationBar from "./navigation";
import Brand from "./brand";
import Canvas from "./canvas";
import './index.scss';

import { useEffect, useRef } from 'react';

function Header()
{
    const header_ref = useRef(null);
    const y_ref = useRef(null);

    const scroll_handle = () =>
    {
        const header = header_ref.current;
        if(null == header) { return; }
        
        const nav = document.getElementById('navigation-bar');
        const y = y_ref.current;

        console.log(y,' : ',window.scrollY,' : ',header.clientHeight);
        console.log(window.scrollY > header.clientWidth);

        if (window.scrollY >= header.clientHeight)
        {
            const diff_y = y - window.scrollY;

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
        }

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
        <header id='header' ref={header_ref}>
            <NavigationBar />
            <Brand />
            <Canvas />
        </header>
    );
};

export default Header;