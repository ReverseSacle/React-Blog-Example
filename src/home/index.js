import Layout from '../layout';
import './index.scss'

function Home()
{

    return (
        <>
            <Layout />
            <div id='container'>
                <div className='main'>
                    <div className='index wrap'></div>
                    <div className='pagination'></div>
                </div>
            </div>
        </>
    );
}

export default Home;