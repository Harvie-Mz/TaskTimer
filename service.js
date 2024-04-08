var Service = require('node-windows').Service;
var svc = new Service({
 name:'TaskTimer',
 description: 'Node.js service description goes here.',
 script: 'C:\\me\\bellcnt.exe'
});

svc.on('uninstall',function(){
    console.log("uninstall complete");
    //svc.start();
});

svc.uninstall();