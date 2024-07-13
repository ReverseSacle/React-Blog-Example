import NavigationBar from './navigation';
import Brand from './brand';
import Canvas from './canvas';
import ToolBar from './toolBar';

import './index.scss';
import '../icon/icon.scss';


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