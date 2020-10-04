const fetch = require('node-fetch');
const uniqid = [];
// fetch('http://mansatupati.my.id/login/do_login', {
  //       method: 'post',
  //       body:    'ajaran=2020&username=0000000219&password=123sekolahmaju',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Cookie':'PHPSESSID=fa2tl4kb8at3rr1r3b3j44s8j2' },
  //   }).then(res=>res.text()).then(text=>console.log(text))
 
const Login = (async (user,pass,session)=>{
  response = await fetch('http://mansatupati.my.id/login/do_login', {
    method: 'post',
    body:    'ajaran=2020&username='+user+'&password='+pass,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Cookie':`PHPSESSID=${session}` },
})
  //  body = awaresponse.text();
   ct = response.headers.get('content-type');
   if(ct === 'text/html; charset=UTF-8'){
     return await response.text()
   }else{
   return await response.json()
   }
});
module.exports = Login;