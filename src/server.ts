import { app } from "./app"

const SERVER_PORT = 3001
// sudo chown -R mongodb:mongodb /var/lib/mongodb
// sudo chown mongodb:mongodb /tmp/mongodb-27017.sock
// sudo systemctl restart mongod
app.listen(SERVER_PORT)
console.log('Server is runing in port:', SERVER_PORT)
