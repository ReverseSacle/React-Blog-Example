import NavigationBar from './navigation';
import Brand from './brand';
import Canvas from './canvas';
import './index.scss';
import ToolBar from './toolBar';


function Header()
{
    return (
        <header id='header'>
            <NavigationBar />
            <Brand />
            <Canvas />
            <ToolBar />
        </header>
    );
};

export default Header;