const ws = new WebSocket("ws://127.0.0.1:7878")

ws.addEventListener("open", function(event) {
    console.log("Sending message to server: Hello!")
    ws.send("Hello!")
})

ws.addEventListener("message", function(event){
    console.log("Message from server:", event.data)
})
