import express, {Request , Response} from "express"
import mustacheExpress from "mustache-express"
import mainRoutes from "./routes/mainRoutes"
import path from "path"


const app = express()

app.use(express.static ("public"))

app.set("view engine" , "mustache")
app.set("views" ,path.join(__dirname, "views") )
app.engine("mustache" , mustacheExpress())

app.use("/" , mainRoutes)

app.use ((req: Request , res: Response) => {
    res.render("pages/pageError.mustache")
})



app.listen(80)