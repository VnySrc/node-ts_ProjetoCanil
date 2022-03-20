import {Request , Response} from "express"
import {Pets} from "../models/Pets"
import {menuCreate} from "../helpers/createMenuObject"

export const home = (req: Request , res: Response) => {
    let list = Pets.getAll()
    let menu = menuCreate("all")
    res.render("pages/index.mustache" , {
        menu,

        banner : {
            title: "Animais",
            background: "allanimals.jpg"
        },

        list
    })
}
 
export const dogs = (req: Request, res: Response) => {
    
    let list = Pets.getByType("dog")

    res.render("pages/index.mustache", {

    menu:menuCreate("dog"),

    banner : {
    title: "Cachorros",
    background: "banner_dog.jpg"
    },

    list
    })
}

export const cats = (req: Request, res: Response) => {
    let menu = menuCreate("cat")
    let list = Pets.getByType("cat")

    res.render("pages/index.mustache", {
    menu,        

    banner : {
    title: "Gatos",
    background: "banner_cat.jpg"
    },
    
    list
    })
}

export const fishes = (req: Request, res: Response) => {
    let menu = menuCreate("fish")
    let list = Pets.getByType("fish")

    res.render("pages/index.mustache", {
    menu,

    banner : {
    title: "Peixes",
    background: "banner_fish.jpg"
    },
    
    list
    })
}

