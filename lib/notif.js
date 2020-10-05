const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Notif = (async (session) => {
    response = await fetch('http://mansatupati.my.id/studentam/semuanotif', {
        method: 'post',
        body: 'ajax=yes',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8','Cookie': `PHPSESSID=${session}` },
    })
    //  body = awaresponse.text();
    ct = response.headers.get('content-type');
    if (ct === 'text/html; charset=UTF-8') {
        data = []
       
        var html = await response.text();
        const $ = cheerio.load(`${html}`)
         $('.notification-info').map(function(i,e){
            if(i<=20){
                data[i] = { 
                 'text' :   $(this).find('a').html(),
                  'waktu': $(this).find('span').html()
                }
            }
        })
        // console.log(data)
        if(data[0]){
            return data
        }else{
            return 'session tidak ada. res: '+html
        }
    } else {
        return response.json()
        // console.log(body)
    }
});

module.exports = Notif;