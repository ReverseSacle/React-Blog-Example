import Header from './header';
import Waves from './waves';
import './index.scss'
import { useEffect, useState } from 'react';

function Layout()
{
    const [y,setY] = useState(null);

    const scroll_handle = () =>
    {
        const nav = document.getElementById('navigation-bar');
        const header = document.getElementById('header');

        console.log(y,' : ',window.scrollY,' : ',header.clientHeight);
        console.log(window.scrollY > header.clientWidth);

        if (window.scrollY >= header.clientHeight)
        {
            const diff_y = y - window.scrollY;
            nav.removeAttribute('class');
            if(diff_y < 0) {
                nav.className = 'show down';
            } else if(diff_y > 0) {
                nav.className = 'show up';
            } else {
                
            }
            console.log(diff_y);
        } else { nav.removeAttribute('class'); }

        setY(window.scrollY);
    };

    useEffect(() => 
    {
        // 通过switcher避免
        /**
         * requestAnimationFrame，
         * 可让浏览器能够优化动画的执行，减少不必要的计算和绘制，
         * 以此避免频繁执行滚动事件处理。
         * 再通过switcher限制了requestAnimationFrame的频繁创建。
        **/
        let switcher = true;
        window.addEventListener('scroll',() => 
        {
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
    },[y]);

    return (
        <>
            <Header />
            <Waves />
            <main>
                <div className='inner'>
                    <div id='main'>
                        <div className='index wrap'></div>
                    </div>
                </div>
            </main>
            <footer id='footer'>
                <div className='inner'>
                    <div className='status'>
                        <div className='copyright'>
                            © 2024 – 2024 ReverseSacle @ React Shoka
                        </div>
                        <div className='powered-by'>          
                            Powered by React & Theme.Shoka
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;