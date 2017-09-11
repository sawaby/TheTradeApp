
const usersRoute = require("./user/user.routes");
const loginRoute = require("./login/login.routes");
const signupRoute = require("./sign_up/signup.routes");
module.exports = (app) =>{
    app.post("/login", loginRoute);
    app.get("/users", usersRoute);
    app.post("/signup", signupRoute);
} 
