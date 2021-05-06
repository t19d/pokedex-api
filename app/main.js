const { app, BrowserWindow } = require('electron');
const path = require('path');

let win = null;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInSubFrames: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false, // If put this, nodeIntegration works
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile(__dirname + '/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});