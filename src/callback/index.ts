import {arr, Game} from '../models'


function findByIdCallback(id: string, callback: (err?: Error, game?: Game) => void): void {

    const game = arr.find(g => g.id === id)

    setTimeout(() => {

        if (!game) return callback(new Error('id no existe'))

        return callback(undefined, game)

    }, 1000)

}


findByIdCallback('400', (err, value) => {
    if (err) {
        console.error(err.message)
    } else {
        console.log('value', value)
    }
})
