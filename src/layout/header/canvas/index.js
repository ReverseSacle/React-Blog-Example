import { v4 as uuidv4 } from 'uuid';
import data from '../../../config.json';
import './index.scss';

function Canvas()
{
    const canvasImageInsert = () =>
    {
        const canvas_image_list = []
        const image_list = data.images;
        const list_length = image_list.length;

        for(let i = 0;i < 6 && i < list_length;++i) { canvas_image_list.push(image_list[i]); }
        
        return canvas_image_list.map((url) => <li style={{ backgroundImage: `url(${url})` }} key={uuidv4()}></li>);
    };
    return (
        <div id="canvas">
            <ul>{ canvasImageInsert() }</ul>
        </div>
    );

}

export default Canvas;