const { exec } = require('child_process');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
request=require('request')
fs=require('fs')
request('https://riot:zNa6tBR02s9rPrZBgtwRtQ@127.0.0.1:62472/lol-champions/v1/inventories/23614482/champions',(err,res,body)=>{
    //console.log(err)
    data=JSON.parse(body)
    tmp=data.map(function(champ){
        if(champ.id===-1){
            return
        }
        exec('curl https://riot:zNa6tBR02s9rPrZBgtwRtQ@127.0.0.1:62472'+champ.skins[0].splashPath+' --insecure --output ./observer/champ_img/'+champ.alias+'.jpg')
        return {id:champ.id,name:champ.alias,path:champ.skins[0].splashPath}
    })


})