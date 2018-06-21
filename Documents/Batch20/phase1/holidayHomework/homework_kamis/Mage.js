const Hero = require('./Hero.js')

class Mage extends Hero{
    constructor(){
        super("Mage","1130", "603", "231")
    }

    skill(){
        console.log(`Mage mengeluarkan skill: Terimalah serangan sihir ini..`)
    }
}

module.exports = Mage