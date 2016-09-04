'use strict';
const electron = require('electron')
const {app, BrowserWindow} = electron

var mainWindow = null;
var ipcMain = electron.ipcMain;

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    frame: false,
    height: 700,
    resizable: false,
    width: 368
  });
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});

ipcMain.on('close-main-window', function () {
  console.log('Bye bye!');
  app.quit();
});
