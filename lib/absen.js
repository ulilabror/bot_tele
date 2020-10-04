const fetch = require('node-fetch');
const cheerio = require('cheerio');
const Absen = (async (session) => {
    response = await fetch('http://mansatupati.my.id/studentkelasam/absensi/NjQyVjZXWg==/QmlvbG9naSB4IE1pYSA2/NjQy', {
        method: 'post',
        body: 'ajax=yes',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8','Cookie': `PHPSESSID=${session}` },
    })
    //  body = awaresponse.text();
    ct = response.headers.get('content-type');
    if (ct === 'text/html; charset=UTF-8') {
        html = await response.text();
        return html
    } else {
        return response.json()
        // console.log(body)
    }
});

module.exports = Absen;