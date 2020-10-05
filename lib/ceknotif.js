const fetch = require('node-fetch');
const Ceknotif = (async (session) => {
    response = await fetch('http://mansatupati.my.id/studentam/cheknotif', {
        method: 'post',
        body: 'ajax=yes',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8','Cookie': `PHPSESSID=${session}` },
    })
    //  body = awaresponse.text();
    ct = response.headers.get('content-type');
    if (ct === 'text/html; charset=UTF-8') {
        data = []
       
        var html = await response.text();
        // const $ = cheerio.load(`${html}`)
        
        // console.log(data)
        return html
    } else {
        return response.json()
        // console.log(body)
    }
});

module.exports = Ceknotif;