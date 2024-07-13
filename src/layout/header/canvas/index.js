import { v4 as uuidv4 } from 'uuid';
import data from '../../../config.json';
import './index.scss';

function Canvas()
{
    const canvasImageInsert = () =>
    {
        const canvas_cover_list = []
        const cover_list = data.covers;
        const list_length = cover_list.length;

        for(let i = 0;i < 6 && i < list_length;++i) { canvas_cover_list.push(cover_list[i]); }
        
        return canvas_cover_list.map((url) => <li data-background-image='' style={{ backgroundImage: `url(${url})` }} key={uuidv4()}></li>);
    };
    
    return (
        <div id="canvas">
            <ul>{ canvasImageInsert() }</ul>
        </div>
    );

}

export default Canvas;