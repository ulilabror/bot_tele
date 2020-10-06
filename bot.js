const Slimbot = require('slimbot');
var moment = require('moment-timezone');
const bot = require('./lib/index.js');
const { isArray } = require('util');
const uniqid = require('uniqid')
const session = uniqid()
console.log(session)
// 1182878039:AAE2Px8NwUMqp4JUp3utJayXF5ht4Y5r2Z8 /bot e-learningman
//              1098227527:AAHw7jcs1pfzf2tzZ-8PmiGBBSctzR2hxRI
const slimbot = new Slimbot('1098227527:AAHw7jcs1pfzf2tzZ-8PmiGBBSctzR2hxRI');

//  Register listeners
setInterval(() => {
  
  // cek notif
  (async (session) => {
    login = await bot.login('0000000219', '123sekolahmaju', session)
    res = await bot.ceknotif(session)
    res1 = await bot.notif(session)
    var send = ''
    if (res != '0') {
      if (isArray(res1)) {
        res1.map((v, i) => {
          send += `notif : ${v.text}\nWaktu : ${v.waktu}\n \n \n \n`
        })
      } else {
        send = res1
      }
      console.log('[success] get notif')
      slimbot.sendMessage('1217727301', send)
    }
    
  })(session)
  slimbot.sendMessage('1217727301', 'success')
}, 3600000)

setInterval(()=>{
  var day = moment().tz("Asia/Jakarta").format('dddd')
  var time = moment().tz("Asia/Jakarta").format('h:mm:ss a')
  if (time == '4:00:00 pm') {
    (async (session) => {
      
      res = await bot.login('0000000219', '123sekolahmaju', session);
      var send = '';
      if (res.error) {
        send = `login gagal.\nresponse: ${res.message.toString()}`
      } else if (!res.error) {
        send = `login sukses.\nresponse: ${res.toString()}`
      } else {
        send = 'err'
      }
      // console.log(res);
      res2 = await bot.absen(session)
      var send2 = ''
      if (isArray(res2)) {
        res2.map((v, i) => {
          send2 += `tanggal: ${v.tanggal}\nstatus: ${v.status}\nabsen: ${v.absen}\n\n\n`
        })
      } else {
        send2 = res2
      }
      console.log(session)
      slimbot.sendMessage('1217727301', `${send2}`)
      
      slimbot.sendMessage('1217727301', send)
    })(session)
  }
  console.log(time, day)
},1000)
// 3,600,000


slimbot.on('message', message => {
  let { text } = message
  const prefix = "#";
  const cmd = text.slice(1).trim().split(/ +/).shift().toLowerCase()
  const arg = text.trim().substring(text.indexOf(' ') + 1)
  const args = text.trim().split(/ +/).slice(1)
  var getText = ''
  const txt = args.map((v,i)=>{getText += `${v} `})
  const isCmd = text.startsWith(prefix)
  const uaOverride = process.env.UserAgent
  const url = args.length !== 0 ? args[0] : ''
  if (text.startsWith(prefix)) {
    if (cmd == 'login') {
      (async (sessi) => {
        console.log(sessi);
        res = await bot.login('0000000219', '123sekolahmaju', sessi);
        var send = '';
        if (res.error) {
          send = `login gagal.\nresponse: ${res.message.toString()}`
        } else if (!res.error) {
          send = `login sukses.\nresponse: ${res.toString()}`
        } else {
          send = 'err'
        }
        console.log('[success] get notif')
        slimbot.sendMessage('1217727301', send)
      })(session)
    } else if (cmd == 'getnotif') {
      (async (session) => {
        res = await bot.notif(session)
        var send = ''
        if (isArray(res)) {
          res.map((v, i) => {
            send += `notif : ${v.text}\nWaktu : ${v.waktu}\n \n \n \n`
          })
        } else {
          send = res
        }
        console.log('[success] get notif')
        slimbot.sendMessage(message.chat.id, send)
      })(session)
      console.log('notif')
    } else if (cmd == 'absen') {
      (async (session) => {
        var send = ''
        res = await bot.absen(session)
        if (isArray(res)) {
          res.map((v, i) => {
            send += `tanggal: ${v.tanggal}\nstatus: ${v.status}\nabsen: ${v.absen}\n\n\n`
          })
        } else {
          send = res
        }
        console.log('[success] absen')
        slimbot.sendMessage(message.chat.id, send)
      })(session)
    }else if(cmd=='ask' && args){
      (async(ask)=>{
        res = await bot.brainly(ask)
        var send = ''
        if(isArray(res)){
          res.map((v,i)=>{
            send += `soal : ${v.ask}\njawab : ${v.jawab}\n\n\n`
          })
        }else{
          send = res
        }
        slimbot.sendMessage(message.chat.id, send)
      })(getText)
    } else if(cmd == 'menu') {
      send = 'Bot-tele\n\n#login= untuk login\n#getNotif= untuk mendapatkan notif\n#absen= untuk absen/melihat absensi\n#ask = untuk bertanya'
      slimbot.sendMessage(message.chat.id, send)
    } else {
      send = 'Perintah tidak ada silahkan, ketik #menu untuk melihat menu'
      slimbot.sendMessage(message.chat.id, send)
    }
    // slimbot.sendMessage(message.chat.id, cmd)
  } else {
    slimbot.sendMessage(message.chat.id, 'Menu tidak ada')
  }

  //  console.log(message)
  //  {
  //   message_id: 1,
  //   from: {
  //     id: 1217727301,
  //     is_bot: false,
  //     first_name: 'Ulil',
  //     last_name: 'Abror',
  //     username: 'mulil_abror',
  //     language_code: 'en'
  //   },
  //   chat: {
  //     id: 1217727301,
  //     first_name: 'Ulil',
  //     last_name: 'Abror',
  //     username: 'mulil_abror',
  //     type: 'private'
  //   },
  //   date: 1601805226,
  //   text: '/start',
  //   entities: [ { offset: 0, length: 6, type: 'bot_command' } ]
  // }


  // slimbot.sendMessage(message.chat.id, 're')
})
// Call API

slimbot.startPolling();