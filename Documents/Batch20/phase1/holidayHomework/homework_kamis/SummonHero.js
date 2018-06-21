const assassin = require('./Assassin.js')
const knight = require('./Knight.js')
const mage = require('./Mage.js')

class SummonHero{
    acak(){
        let random = Math.floor(Math.random()*100)
        return random
    }

    panggil(){
        let random = this.acak()
        if(random <= 50){
            let newAssassin = new assassin
            return newAssassin
        } else if(random <= 84){
            let newKnight = new knight
            return newKnight
        } else{
            let newMage = new mage
            return newMage
        }
    }
}

module.exports = SummonHero