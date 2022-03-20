import {Request , Response} from "express"
import {Pets} from "../models/Pets"
import {menuCreate} from "../helpers/createMenuObject"


export const search = (req: Request, res: Response) =>{
    let menu = menuCreate("")
    let query:string = req.query.q as string
    let list = Pets.getBYSearch(query.toLowerCase())

    res.render("pages/index.mustache", {
    menu,
    list,
    query,

    })
}