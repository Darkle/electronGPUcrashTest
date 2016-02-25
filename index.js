var path = require('path')

var electron = require('electron')

var electronApp = electron.app

electronApp.on('gpu-process-crashed', event => {
  console.log(`electronApp: gpu-process-crashed`)
})

electronApp.on('ready', () => {

  var browserWindow = new electron.BrowserWindow({show: true})
  browserWindow.loadURL(path.join('file://', __dirname, 'test.html'))
  browserWindow.webContents.openDevTools()

  browserWindow.webContents.once('did-finish-load', event => {
    browserWindow.send('start')
  })
})

