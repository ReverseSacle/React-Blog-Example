import './index.scss';

function Quick()
{
    const upClickHandle = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    const downClickHandle = () => {
        const root = document.getElementById('root');
        window.scrollTo({ top: root.clientHeight, behavior: 'smooth'});
    };

    return (
        <ul id='quick'>
            <li className='prev pjax'></li>
            <li className='up' onClick={ upClickHandle }><i className='ic i-arrow-up'></i></li>
            <li className='down' onClick={ downClickHandle }><i className='ic i-arrow-down'></i></li>
            <li className='next pjax'></li>
            <li className='percent'></li>
        </ul>
    );
}

export default Quick;