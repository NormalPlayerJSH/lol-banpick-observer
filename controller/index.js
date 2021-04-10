const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let dataToSend={
    common: {
      lang: "korean",
      show: {
        champName: true,
        userName: true,
        spells: true
      },
      remainTime: 10
    },
    "blue": {
      0: {
        name: "블루팀 이름"
      },
      1: {
        pick: {
          id: 150,
          isDoing: false
        },
        ban: {
          id: 235,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "일이삼사오육칠팔"
      },
      2: {
        pick: {
          id: 106,
          isDoing: false
        },
        ban: {
          id: 412,
          isDoing: false
        },
        spells: {
          1: 11,
          2: 4
        },
        name: "블루팀 2픽"
      },
      3: {
        pick: {
          id: 61,
          isDoing: false
        },
        ban: {
          id: 4,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "블루팀 3픽"
      },
      4: {
        pick: {
          id: 81,
          isDoing: true
        },
        ban: {
          id: 429,
          isDoing: false
        },
        spells: {
          1: 1,
          2: 4
        },
        name: "블루팀 4픽"
      },
      5: {
        pick: {
          id: -1,
          isDoing: true
        },
        ban: {
          id: 3,
          isDoing: false
        },
        spells: {
          1: 3,
          2: 4
        },
        name: "블루팀 5픽"
      }
    },
    red: {
      0: {
        name: "레드팀 이름"
      },
      1: {
        pick: {
          id: 84,
          isDoing: false
        },
        ban: {
          id: 77,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "abcdefghijklmnop"
      },
      2: {
        pick: {
          id: 120,
          isDoing: false
        },
        ban: {
          id: 147,
          isDoing: false
        },
        spells: {
          1: 11,
          2: 6
        },
        name: "레드팀 2픽"
      },
      3: {
        pick: {
          id: 142,
          isDoing: false
        },
        ban: {
          id: 201,
          isDoing: false
        },
        spells: {
          1: 12,
          2: 4
        },
        name: "레드팀 3픽"
      },
      4: {
        pick: {
          id: 110,
          isDoing: false
        },
        ban: {
          id: 18,
          isDoing: false
        },
        spells: {
          1: 4,
          2: 7
        },
        name: "레드팀 4픽"
      },
      5: {
        pick: {
          id: 89,
          isDoing: false
        },
        ban: {
          id: -1,
          isDoing: true
        },
        spells: {
          1: 14,
          2: 4
        },
        name: "레드팀 5픽"
      }
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