import Overview from "./overview";

import './index.scss';
import Quick from "./quick";

function SideBar()
{
    return (
        <div id='sidebar'>
            <div className='inner'>
                <div className='pannels'>
                    <div className='contents panel'></div>
                    <div className='related panel'></div>
                    <Overview />
                </div>
                <Quick />
            </div>
        </div>
    );
}

export default SideBar;