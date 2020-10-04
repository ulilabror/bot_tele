const fetch = require('node-fetch');
const cheerio = require('cheerio');
const $ = null
var data = []

const Home = (async (session=null) => {
    if(session != null){

        response = await fetch('http://mansatupati.my.id/studentam', {
            method: 'get',
            headers: { 'Cookie': `PHPSESSID=${session}` },
        })
    //  body = awaresponse.text();
    ct = response.headers.get('content-type');
    if (ct === 'text/html; charset=UTF-8') {
        html = await response.text()
        const $ = cheerio.load(`${html}`)
        $('#konten').find('a').map(function (i, el) {
            // this === el
            data[i] = {
                'href': $(this).attr('href').replace('menu','absensi'),
                'text': $(this).attr('title')
            };
        });
        if (data == null) {
            console.log('err, retry login again')
        } else {
            return data
        }
    } else {
        console.log(await response.json())
        // console.log(body)
    }
}else{
    console.log('session tidak ada, silahkan login ulang')
}
});

module.exports = Home;
