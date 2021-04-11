const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const request=require('request')

const LCUConnector = require('lcu-connector');
const connector = new LCUConnector();

let dataToSend={
    common: {
      lang: "korean",
      show: {
        champName: true,
        userName: true,
        spells: true,
        score: true
      },
      endTime: -1
    },
    "blue": {
      0: {
        score: 0,
        name: ""
      },
      1: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      2: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      3: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      4: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
      5: {
        pick: {
          id: -1,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: false
        },
        spells: {
          1: -1,
          2: -1
        },
        name: ""
      },
    },
    red: {
        0: {
          score: 0,
          name: ""
        },
        1: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        2: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        3: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        4: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
        5: {
          pick: {
            id: -1,
            isDoing: false
          },
          ban: {
            id: -1,
            isDoing: false
          },
          spells: {
            1: -1,
            2: -1
          },
          name: ""
        },
      }
  }
var express = require("express");
var expressApp = express();

expressApp.get('/data',(req,res)=>{
    res.status(200).json(dataToSend)
})

expressApp.use(express.static(path.join(__dirname, 'show')));
expressApp.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/show/index.html'));
  });

let link=''
let isLCUConnected=false
let nowInterval=-1

let isReseted=true

connector.on('connect',(data)=>{
    link=`https://riot:${data.password}@127.0.0.1:${data.port}`
    isLCUConnected=true
    console.log(data)
    nowInterval=setInterval(()=>{
        request(link+'/lol-champ-select/v1/session',(err,res,body)=>{
            if(err) return
            d=JSON.parse(body)
            if(d.httpStatus==404){
                if(!isReseted){
                    dataToSend.common.endTimeTime=-1
                    for(const side of ['blue','red']){
                        for(const num of [1,2,3,4,5]){
                            let target=dataToSend[side][num]
                            target.pick.id=-1
                            target.pick.isDoing=false
                            target.ban.id=-1
                            target.ban.isDoing=false
                            target.spells[1]=-1
                            target.spells[2]=-1
                        }
                    }
                }
                return
            }
            isReseted=false
            let cellToData={}
            for(const team of ['myTeam','theirTeam']){
                for (const [i,player] of d[team].entries()){
                    let side=(team=='myTeam')?'blue':'red'
                    let num=i+1
                    cellToData[player.cellId]={side:side,num:num}
                    playerData=dataToSend[side][num]
                    playerData.pick.id=(player.championId==0)?-1:player.championId
                    playerData.spells[1]=(player.spell1Id>100)?-1:player.spell1Id
                    playerData.spells[2]=(player.spell2Id>100)?-1:player.spell2Id
                }
            }
            let blueBanNum=1
            let redBanNum=1
            for(const actions of d.actions){
                for(const action of actions){
                    let {side,num}=cellToData[action.actorCellId]
                    if(action.type=='pick'){
                        //dataToSend[side][num]['pick']['id']=(action.championId==0)?-1:action.championId
                        dataToSend[side][num]['pick']['isDoing']=action.isInProgress
                    } else if(action.type=='ban'){
                        let banNum=(side=='blue')?blueBanNum++:redBanNum++
                        dataToSend[side][banNum]['ban']['id']=(action.championId==0)?-1:action.championId
                        dataToSend[side][banNum]['ban']['isDoing']=action.isInProgress
                    }
                }
            }
            dataToSend.common.endTime=parseInt(d.timer.internalNowInEpochMs)+parseInt(d.timer.adjustedTimeLeftInPhase)
            //console.log(`${d.timer.adjustedTimeLeftInPhase} ${d.timer.internalNowInEpochMs} ${d.timer.totalTimeInPhase}`)
            //console.log(parseInt(d.timer.internalNowInEpochMs)+parseInt(d.timer.adjustedTimeLeftInPhase))
            //console.log(JSON.stringify(d))
            //console.log(JSON.stringify(dataToSend))
        })
        
    },100)
})

connector.on('disconnect',()=>{
    console.log('disconnect')
    clearInterval(nowInterval)
})


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  connector.start()
  expressApp.listen(7777,()=>{
      console.log('Server Running')
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('controller_info',(e,payload)=>{
    console.log(payload)
    for (const type of ['userName','spells','champName']){
        dataToSend.common.show[type]=payload[type]
    }
    for (const side of ['blue','red']){
        for(const pick of [0,1,2,3,4,5]){
            dataToSend[side][pick].name=payload[side][pick]
        }
    }
})