const electron = require("electron")
const path = require("path")
const url = require("url")

const {app, BrowserWindow} = electron
let win;
app.on("ready",function(){
    win = new BrowserWindow({show: false,icon: path.join(__dirname,"image.ico")})
    win.setMenu(null)
    win.setTitle("Attendance")
    win.loadURL(url.format({
        pathname : path.join(__dirname,"index.html"),
        protocol:"file",
        slashes : true
    }))
    win.setFullScreen(true)
    win.setMenuBarVisibility(false)
})
