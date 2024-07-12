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
        const current_y = window.scrollY;

        if(null != y)
        {
            const diff_y = y - current_y;
            nav.removeAttribute('class');
            if(diff_y < 0) {
                nav.className = 'show down';
            } else if(diff_y > 0) {
                nav.className = 'show up';
            } else {
                
            }

            console.log(diff_y);
        }

        setY(current_y);
    };

    useEffect(() => {
        window.addEventListener('scroll',() => { scroll_handle(null); });
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