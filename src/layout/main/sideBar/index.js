import Quick from './quick';
import Overview from './overview';
import './index.scss';


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