const Hero = require('./Hero.js')

class Assassin extends Hero{
    constructor(){
        super("Assassin","1200", "543", "341")
    }

    skill(){
        console.log(`Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..`)
    }
}

module.exports = Assassin