const Game = {
    name: 'cricket',
    with: 'family'
}

const intro = {
    giveIntro: function(){
        return this.name + " played best with your " + this.with
    }
}

console.log(intro.giveIntro.call(Game))