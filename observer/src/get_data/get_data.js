const { exec } = require('child_process');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
request = require('request')
fs = require('fs')
sharp = require('sharp')
link = 'https://riot:L2Q1f1NxA5IR7COABrHJQQ@127.0.0.1:62560'
console.log(__dirname)
request(link + '/lol-champions/v1/inventories/23614482/champions', (err, res, body) => {
    //console.log(err)
    data = JSON.parse(body)
    ttmp = { }
    tmp = data.map(function (champ) {
        if (champ.id === -1) {
            return
        }
        // parseInt
        // exec('curl '+link+champ.skins[0].splashPath+' --insecure --output ./observer/src/img/champ_img/beforeCrop/'+champ.alias+'.jpg')
        // console.log('curl '+link+champ.skins[0].splashPath+' --insecure --output ./observer/src/img/champ_img/beforeCrop/'+champ.alias+'.jpg')
        // sharp('../img/champ_img/beforeCrop/'+champ.alias+'.jpg').extract({left:0,top:0,width:1280,height:480}).toFile('../img/champ_img/afterCrop/'+champ.alias+'.jpg',(err)=>{if(err){console.log(err, champ.name)}})
        // return {id:champ.id,name:champ.alias,path:champ.skins[0].splashPath}
        // console.log(`${champ.alias}:${champ.alias},`)
        ttmp[parseInt(champ.id)] = champ.alias
    })
    console.log(JSON.stringify(ttmp))


})