import MainId from './mainId';
import SideBar from './sideBar';
import './index.scss';

function Main()
{

    return (
        <main>
        <div className='inner'>
            <MainId />
            <SideBar />
        </div>
    </main>
    );
}

export default Main;