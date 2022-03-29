import {arr, Game} from "../models";


const findById = async (id: string): Promise<Game | undefined> => {

    let g: Game

    setTimeout(() => {
        g = arr.find(a => a.id === id)
    }, 1500)

    return g;
}

//console.log(findById('1'))


const findByIdPromise = (id: string): Promise<Game> => {

    let g: Game

    return new Promise((resolve) => {

        setTimeout(() => {
            g = arr.find(a => a.id === id)
            resolve(g)

        }, 1500)

    })

}


/*const value = await findByIdPromise('1')*/


/*findByIdPromise('1')
    .then(value => {
    console.log(value)})
    .catch(reason => {
        console.log(reason)
    })*/
// async y await


    (async () => {

        try {
            const value = await findByIdPromise('1')
            console.log(value)
        }catch (e) {
            console.log(e)
        }

    })()


