const fs = require('fs-extra');
const yaml = require('js-yaml');

// choose use image from local, otherwise use web link in _images.yml 
const config_dir = './_config.yml';

const local_image = true;
const local_image_dir = './imgs';
const web_image_dir = './_images.yml'
const output_dir = './src/config.json';

try
{
    // import _config.yml
    const data = yaml.load(fs.readFileSync(config_dir,'utf-8'));

    // import imgs
    let image_file_name = []
    if (local_image)
    {
        try
        {
            const image_list = fs.readdirSync(local_image_dir);

            image_list.forEach(file_name => {
                image_file_name.push('./imgs/' + file_name);
            });
        
            if (image_file_name.length > 0) 
            { 
                data.images = image_file_name;
                fs.copySync(local_image_dir,'./public/imgs')
            }
        } catch (e) { console.log(e); }
    }
    else
    {
        try
        {
            const web_image_data = yaml.load(fs.readFileSync(web_image_dir,'utf-8'));
            data.images = web_image_data
        } catch(e) { console.log(e); }

    }

    fs.writeFileSync(output_dir,JSON.stringify(data));
} 
catch (e) 
{ 
    console.log(e);
    throw new Error('Error');
}