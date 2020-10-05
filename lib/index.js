const Login = require('./Login.js')
const Home = require('./Home.js')
const Absen = require('./absen.js')
const Notif = require('./notif.js')
const Ceknotif = require('./ceknotif.js')
module.exports = {
    home: Home,
    login: Login,
    absen: Absen,
    notif: Notif,
    ceknotif: Ceknotif
}
// Login("0000000219","123sekolahmaj",session)
// Home(session);
// var prompt = require('prompt');

//
// Start the prompt
//
//prompt.start();

//
// Get two properties from the user: username and email
//


// prompt.get(['user', 'pass', 'cmd'], function (err, result) {
//     //
//     // Log the results.
//     //
//     if (result.cmd == 'login') {
//         Login(result.user, result.pass, session)
//     } else if (result.cmd == 'home') {
//         Home(session)
//     }
// })

// prompt2.start()
//     prompt2.get(['cmd'], function (err, result) {
//         //
//         // Log the results.
//         //
//         if (result.cmd == 'login') {
//             Login(result.user, result.pass, session)
//         } else if (result.cmd == 'home') {
//             Home(session)
//         } else {
//             console.log('end')
//             y = 'n'
//         }
//     });
