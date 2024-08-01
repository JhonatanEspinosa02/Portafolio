import server from "./Server";
import color from "colors";

//LocalHost
const port = process.env.PORT || 4000;

//Listen to LocalHost and print a message on terminal
server.listen(port, () => {
    try {
        console.log(color.magenta.bold(`The REST API is on PORT: ${port}`))
    } catch (error) {
        console.log(color.red.bold(`The REST API has a connection problem`))
    }
})

