import './index.scss';

function ToolBar()
{
    return (
        <ul id='toolbar' className=''>
            <li className='contents'><i className='ic i-list-ol'></i></li>
            <li className='chat'><i className='ic i-comments'></i></li>
            <li className='back-to-top'>
                <i className='ic i-arrow-up'></i>
                <span></span>
            </li>
        </ul>
    );
}

export default ToolBar;