const Hero = require('./Hero.js')

class Knight extends Hero{
    constructor(){
        super("Knight","3213", "126", "431")
    }

    skill(){
        console.log(`Knight mengeluarkan skill: Lemparan Perisai Suci`)
    }
}

module.exports = Knight