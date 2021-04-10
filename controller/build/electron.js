const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration:false
        }
    })
    win.loadFile('../build/index.html')
/*
    if (isDev) {
        win.loadURL('http://localhost:7000')
        console.log(path.join(__dirname, 'preload.js'))
    } else {
        win.loadFile('index.html')
    }
    */

}

app.whenReady().then(() => {
    createWindow()

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

ipcMain.on('changed',(e,args)=>{
    console.log(args)
})