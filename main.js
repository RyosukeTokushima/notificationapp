const { app, BrowserWindow, Notification } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 500,
        height: 80
    })

    win.loadFile('index.html')
}

const NOTIFICATION_PERSON = '濱本 賢夫'
const NOTIFICATION_BODY = '仕事しろ！！！！！！！' 

function showNotification () {
    new Notification({ title: NOTIFICATION_PERSON, body: NOTIFICATION_BODY}).show()
}


app.whenReady().then(createWindow).then(() => {
    setInterval(showNotification, 10000);
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})
  