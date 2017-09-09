
const usersRoute = require("./user/user.routes");
const loginRoute = require("./login/login.routes");

module.exports = (app) =>{
    app.post("/login", loginRoute);
    app.get("/users", usersRoute);
} 
