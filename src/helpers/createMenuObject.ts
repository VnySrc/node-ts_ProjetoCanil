type menuTypes = "" | "all" | "dog" | "cat" | "fish"

export function menuCreate (selected: menuTypes) {
    let MenuOptions = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    }
    if (selected !== "") {
        MenuOptions[selected] = true   
    }
    return MenuOptions;
}