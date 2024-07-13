import './index.scss';

function Toggle()
{
    return (
        <div className='toggle'>
            <div className='lines' role='navigation'>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>
        </div>
    );
}

export default Toggle;