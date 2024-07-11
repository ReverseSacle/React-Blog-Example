import Header from './header';
import Waves from './waves';
import './index.scss'

function Layout()
{

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