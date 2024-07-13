import { v4 as uuidv4 } from 'uuid';
import data from '../../../../config.json';


function ToolBar()
{
    const createNavigationTool = () =>
    {
        const list_li = [];
        const tool_list = data.nav_tool;

        list_li.push(
            <li className='theme' key={uuidv4()}>
                <i className='ic i-sun'></i>
            </li>
        );
        for (const key in tool_list)
        {
            const value = tool_list[key];
            if ('string' == typeof value)
            {
                const content = (
                    <li className={key} key={uuidv4()}>
                        <a>
                            <i className={ 'ic ' + 'i-' + value }></i>
                        </a>
                    </li>
                );
                list_li.push(content);
            }
        }
        return list_li.map((label) => label);
    };
    return (
        <ul className='tool'>{createNavigationTool()}</ul>
    );
}

export default ToolBar;