
var electron = require('electron')

var ipcRenderer = electron.ipcRenderer

module.exports = function(){

  ipcRenderer.on('start', event =>{

    console.log('start')

    var webview = document.createElement('webview')

    webview.addEventListener('gpu-crashed', event =>{
      console.log(`webview: gpu-crashed`)
    })

    webview.addEventListener('crashed', event =>{
      console.log(`webview: crashed`)
    })

    webview.addEventListener('did-finish-load', event =>{
      console.log(`webview: did-finish-load`)
    })


    webview.addEventListener('dom-ready', event => {
      webview.openDevTools()
    })

    //webview.setAttribute('src', 'http://google.com')
    //webview.setAttribute('src', 'chrome://gpucrash')
    webview.setAttribute('src', 'chrome://crash')
    document.body.appendChild(webview)

  })
}