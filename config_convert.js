const fs = require('fs-extra');
const yaml = require('js-yaml');

// choose use image from local, otherwise use web link in _images.yml 
const config_dir = './_config.yml';

// cover for post and canvas
const local_cover = true;
const local_cover_dir = './cover';
const web_cover_dir = './_covers.yml'
const output_dir = './src/config.json';

// local imgs
const local_imgs_dir = './imgs';

try
{
    // import _config.yml
    const data = yaml.load(fs.readFileSync(config_dir,'utf-8'));

    // import covers
    let cover_file_name = [];
    if (local_cover)
    {
        try
        {
            const cover_list = fs.readdirSync(local_cover_dir);

            cover_list.forEach(file_name => {
                cover_file_name.push('/covers/' + file_name);
            });
        
            if (cover_file_name.length > 0) 
            { 
                data.covers = cover_file_name;
                fs.copySync(local_cover_dir,'./public/covers');
            }
        } catch (e) { console.log(e); }
    }
    else
    {
        try
        {
            const web_cover_data = yaml.load(fs.readFileSync(web_cover_dir,'utf-8'));
            data.covers = web_cover_data;
        } catch(e) { console.log(e); }
    }


    // import imgs
    try
    {
        let img_file_name = [];
        const image_list = fs.readdirSync(local_imgs_dir);

        image_list.forEach(file_name => {
            img_file_name.push('/imgs/' + file_name);
        });
    
        if (img_file_name.length > 0) 
        { 
            data.imgs = img_file_name;
            fs.copySync(local_imgs_dir,'./public/imgs');
        }
    } catch (e) { console.log(e); }

    fs.writeFileSync(output_dir,JSON.stringify(data));
} 
catch (e) 
{ 
    console.log(e);
    throw new Error('Error');
}