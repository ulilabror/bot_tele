const brainly = require('brainly-scraper');
 
const Brainly = (async(ask)=>{ 
   var res = await brainly(ask)
    // console.log(res.success,res)
    var data = []
    console.log(res)
    if(res.success){
        res.data.map((v,i)=>{
            if(i<3){
                data[i] = {
                    'ask': v.pertanyaan,
                    'jawab': v.jawaban[0].text,
                    'jpg': v.jawaban[0].media
    
                }
            }
        })
        return data
    }else{
        return 'not found. '+res.success.toString()
    }
});

module.exports = Brainly
