import { Link } from 'react-router-dom';
import data from '../../../config.json';
import { v4 as uuidv4 } from 'uuid';

import './index.scss';
import '../../icon/icon.scss';

function NavigationBar()
{
    const navItemCreate = () =>
    {
        const list_li = [];
        const menu_list = data.menu;

        list_li.push(
            <li className="title" key={uuidv4()}>
                <a>{ data.web_title }</a>
            </li>
        );
        for (const key in menu_list)
        {
            // const li_label = <Link to={ path }>{key}</Link>;
            const value = menu_list[key];
            if ('string' == typeof value)
            {
                const combine = value.split('||');
                const path = combine[0].trim();
                const icon = combine[1].trim();
                const content = (
                    <li className={key} key={uuidv4()}>
                        <Link to={ path }>
                            <i className={ 'ic ' + 'i-' + icon }></i>
                            { key }
                        </Link>
                    </li>
                );
                list_li.push(content);
            }
            else
            {
                const sub_list_li = [];
                const sub_menu_list = data.menu[key];
                let switcher = true;
                let sub_default_icon = '';
    
                for (const sub_key in sub_menu_list)
                {
                    const sub_value = sub_menu_list[sub_key];
                    if ('string' == typeof sub_value)
                    {
                        const sub_combine = sub_value.split('||');
                        const sub_path = sub_combine[0].trim();
                        const sub_icon = sub_combine[1].trim();
    
                        if(switcher)
                        {
                            sub_default_icon = sub_icon;
                            switcher = !switcher;
                            continue;
                        }
                        const sub_content = (
                            <li className={sub_key} key={uuidv4()}>
                                <Link to={ sub_path }>
                                    <i className={ 'ic ' + 'i-' + sub_icon }></i>
                                    { sub_key }
                                </Link>
                            </li>
                        );
                        sub_list_li.push(sub_content);
                    }
                }
                list_li.push((
                    <li className={key + ' dropdown'} key={uuidv4()}>
                        <a className='list'>
                            <i className={ 'ic ' + 'i-' + sub_default_icon }></i>
                            {key}
                        </a>
                        <ul className="submenu">
                            {sub_list_li.map((label) => label)}
                        </ul>
                    </li>
                ));
            }
        }

        return list_li.map((label) => label);
    };
        
    const navToolCreate = () =>
    {
        const list_li = [];
        const tool_list = data.tool;

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
        <nav id='navigation-bar' className=''>
            <div className='toggle'>
                <div className='lines' role='navigation'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
            <ul className='menu'>{ navItemCreate() }</ul>
            <ul className='tool'>{ navToolCreate() }</ul>
        </nav>
    );
}

export default NavigationBar;