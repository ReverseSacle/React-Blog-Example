import Toggle from './toggle';
import Menu from './menu';
import Tool from './tool';

import './index.scss';

function NavigationBar()
{   
    return (
        <nav id='navigation' className=''>
            <Toggle />
            <Menu />
            <Tool />
        </nav>
    );
}

export default NavigationBar;