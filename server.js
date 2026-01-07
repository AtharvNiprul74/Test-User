const express = require("express");
require("dotenv").config();
const userRouter = require("./Routes/user");
// const { authUser, checkAuthorization } = require("./Utils/userAuth");
const app = express();
const cors = require("cors")
const port = process.env.PORT

app.use(cors())
app.use(express.json());
app.use("/user",userRouter);

app.use("/",()=>{
  console.log("Server Started....")
})

app.listen(port, "localhost", () => {
  console.log(`Server is running on{${port}}`);
});
