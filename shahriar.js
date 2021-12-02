const xmpp = require("simple-xmpp");

try{
    xmpp.on ("online", data => {
        console.log("Hey you are online! ")
        console.log(`Connected as ${data.jid.user}`)
        send();
    })
    
    function send () {
        setTimeout(send, 5000);
        xmpp.send("myadmin@ip-172-31-23-49.ap-southeast-1.compute.internal", `hi! ${Date.now()}`)
    }
    xmpp.on("error", error => 
        console.log(`something went wrong!${error} `))
    
    xmpp.on("chat", (from, message)=>{
        console.log(`Got a message! ${message} from ${from}`)
    })
    
    xmpp.connect({
        "jid": "01833184133@ip-172-31-23-49.ap-southeast-1.compute.internal",
        "password": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqaWQiOiIwMTgzMzE4NDEzM0BpcC0xNzItMzEtMjMtNDkuYXAtc291dGhlYXN0LTEuY29tcHV0ZS5pbnRlcm5hbCIsImV4cCI6MTYzODU0NzE0NH0.Lv4AbDKJ21SmEbgz_KcrsKQ9G32IJRFWqYVBDcOVHkw",
        "host": "54.254.227.31",
        "port": 5222
    })
}catch(e){
    console.log(e);
}
