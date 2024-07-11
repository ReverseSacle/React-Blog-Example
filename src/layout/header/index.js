import NavigationBar from "./navigation";
import Brand from "./brand";
import Canvas from "./canvas";
import './index.scss'


function Header()
{
    return (
        <header id='header'>
            <NavigationBar />
            <Brand />
            <Canvas />
        </header>
    );
};

export default Header;