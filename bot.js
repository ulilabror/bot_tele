const Slimbot = require('slimbot');
var moment = require('moment-timezone');
const bot = require('./lib/index.js');
const { send } = require('process');
const session = 'logged123456'

// 1182878039:AAE2Px8NwUMqp4JUp3utJayXF5ht4Y5r2Z8 /bot e-learningman
//              1098227527:AAHw7jcs1pfzf2tzZ-8PmiGBBSctzR2hxRI
const slimbot = new Slimbot('1098227527:AAHw7jcs1pfzf2tzZ-8PmiGBBSctzR2hxRI');

//  Register listeners
setInterval(() => {
  var day = moment().tz("Asia/Jakarta").format('dddd')
  var time = moment().tz("Asia/Jakarta").format('h:mm:ss a')
  if (time == '12:58:00 am') {
    (async (session) => {
      console.log('hello');
      res = await bot.login('0000000219', '123sekolahmaju', session);
      var send = '';
      if (res.error) {
        send = `login gagal.\nresponse: ${res.message.toString()}`
      } else if (!res.error) {
        send = `login sukses.\nresponse: ${res.toString()}`
      } else {
        send = 'err'
      }
      console.log(res);
      res2 = await bot.absen('test')
      console.log(session)
      slimbot.sendMessage('1217727301', `respond: ${res2}`)

      slimbot.sendMessage('1217727301', send)
    })(session)
  }

  console.log(time, day)
}, 1000)


slimbot.on('message', message => {
  let { text } = message
  const prefix = "#";
  const cmd = text.slice(1).trim().split(/ +/).shift().toLowerCase()
  const arg = text.trim().substring(text.indexOf(' ') + 1)
  const args = text.trim().split(/ +/).slice(1)
  const isCmd = text.startsWith(prefix)
  const uaOverride = process.env.UserAgent
  const url = args.length !== 0 ? args[0] : ''
  if (text.startsWith(prefix)) {
    if (cmd == 'login') {
      (async (session) => {
        console.log('hello');
        res = await bot.login('0000000219', '123sekolahmaju', session);
        var send = '';
        if (res.error) {
          send = `login gagal.\nresponse: ${res.message.toString()}`
        } else if (!res.error) {
          send = `login sukses.\nresponse: ${res.toString()}`
        } else {
          send = 'err'
        }
        console.log(send);
        slimbot.sendMessage('1217727301', send)
      })(session)
    } else if (cmd == 'getnotif') {
      (async (session) => {
        res = await bot.notif(session)
        var send = ''
        res.map((v, i) => {
          send += `notif : ${v.text}\nWaktu : ${v.waktu}\n \n \n \n`
        })
        console.log(send)
        slimbot.sendMessage(message.chat.id, send)
      })(session)
      console.log('notif')
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