import data from '../../../../config.json';
import './index.scss';

function Overview()
{
    const authorImgInsert = () =>
    {
        const author_img = data.sidebar.avatar;
        if (author_img.startsWith('http')) {
            return author_img;
        }

        return `./imgs/${author_img}`;
    };

    return (
        <div className='overview panel'>
            <div className='author'>
                <img className='image' alt='author-img' src={ authorImgInsert() }></img>
                <p className='name'>{ data.author }</p>
                <div className='description'>{ data.description }</div>
            </div>
        </div>
    );
}

export default Overview;