import data from '../../../config.json'
import './index.scss'

function Brand()
{

    return (
        <div id='brand' className=''>
            <p className='artboard'>{data.web_title}</p>
            <h1 className='title'>{data.logo_title}</h1>
            <p className='description'>{'= ' + data.logo_description + ' ='}</p>
        </div>
    );
}

export default Brand;