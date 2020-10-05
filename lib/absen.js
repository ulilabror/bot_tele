const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { html } = require('cheerio');
const Absen = (async (session) => {
    response = await fetch('http://mansatupati.my.id/studentkelasam/absensi/NjQyVjZXWg==/QmlvbG9naSB4IE1pYSA2/NjQy', {
        method: 'post',
        body: 'ajax=yes',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Cookie': `PHPSESSID=${session}` },
    })
    //  body = awaresponse.text();
    ct = response.headers.get('content-type');
    if (ct === 'text/html; charset=UTF-8') {
       var html = await response.text();
        const $ = cheerio.load(`${html}`)
        var data = []
        $('tbody').slice(0, 1).find('tr').map(function (i, e) {
            data[i] = {
                'tanggal': $(this).find('td').slice(1).html(),
                'status': $(this).find('td').slice(2).html(),
                'absen': $(this).find('td').slice(3).html()
            }
        }
        )
        // console.log(data,html)
        if (data[0]) {
            return data
        } else {
            return 'session berakhir, login ulang\nres: '+html
        }
        // $('.notification-info').map(function(i,e){
        //     if(i<=20){
        //         data[i] = { 
        //          'text' :   $(this).find('a').html(),
        //           'waktu': $(this).find('span').html()
        //         }
        //     }
        // })

    } else {
        return response.json()
    }
});


module.exports = Absen;