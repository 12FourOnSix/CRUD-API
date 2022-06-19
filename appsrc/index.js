import { createServer, ServerResponse, IncomingMessage } from "http";
import { URL } from "url";
import { createUser } from "./helpers/createUser.js";

const server = createServer(),
  port = process.env.PORT,
  usersList = [];

server.on("request", (req, res) => {
  try {
    switch (req.method) {
      case "POST":
        if (req.url !== "/api/users") return;

        // получаем данные из body запроса...
        const newUser = createUser();
        usersList.push(newUser);
        break;

      case "GET":
        if (req.url === "/api/users")
          res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(usersList));
        break;

      case "PUT":
        break;

      case "DELETE":
        break;
    }

    res.end();
  } catch (err) {
    console.error(err.message);
  }
});

server.listen(port);
