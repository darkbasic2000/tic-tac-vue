const app = Vue.createApp({
    data() {
        return {
            turn: Math.floor(Math.random() * 2) == 1 ? 'o' : 'x',
            winner: '',
            playing: true,
            times: 0,
            items: [
                { title: 'default', icon: 'square.png' },
                { title: 'x', icon: 'x.png' },
                { title: 'o', icon: 'o.png' }
            ],
            squares: [
                {id: 1, title: '', icon: ''},
                {id: 2, title: '', icon: ''},
                {id: 3, title: '', icon: ''},
                {id: 4, title: '', icon: ''},
                {id: 5, title: '', icon: ''},
                {id: 6, title: '', icon: ''},
                {id: 7, title: '', icon: ''},
                {id: 8, title: '', icon: ''},
                {id: 9, title: '', icon: ''}
            ],
            f: 'left',
            b: 'both'
        }
    },
    computed: {        			
        check() {
            const a1 = this.squares[0].icon
            const a2 = this.squares[1].icon
            const a3 = this.squares[2].icon
            const b1 = this.squares[3].icon
            const b2 = this.squares[4].icon
            const b3 = this.squares[5].icon
            const c1 = this.squares[6].icon
            const c2 = this.squares[7].icon
            const c3 = this.squares[8].icon
            let icon = ''
            for(var i = 0; i < 2; i++) {
                if(i === 0) {
                    icon = this.items[1].icon
                }
                else {
                    icon = this.items[2].icon
                }
                if(a1 === icon && a2 === icon && a3 === icon || 
					b1 === icon && b2 === icon && b3 === icon || 
					c1 === icon && c2 === icon && c3 === icon || 
					a1 === icon && b1 === icon && c1 === icon ||
					a2 === icon && b2 === icon && c2 === icon ||
					a3 === icon && b3 === icon && c3 === icon ||
					a1 === icon && b2 === icon && c3 === icon || 
					a3 === icon && b2 === icon && c1 === icon && this.times < 9) {
                    this.winner = icon
                    this.playing = false
                    return this.winner
                }
                else {
                    this.winner = this.items[0].icon
                    if(this.times == 9) {
                        if(this.playing) {
                            this.playing = false
                            setTimeout(() => {
                                alert('DRAW GAME!')
                            }, 1000)
                            return this.winner
                        }                      
                    }
                }
            }
            return this.winner
        }
    },
    methods: {
        play(square) {
            if(this.playing) {
                if(square.icon == '') { 
                    if(this.turn == 'o') {
                        square.icon = this.items[2].icon
                        square.title = this.items[2].title
                        this.turn = 'x'
                        this.times++
                    }
                    else {
                        square.icon = this.items[1].icon
                        square.title = this.items[1].title
                        this.turn = 'o'
                        this.times++
                    }
                }
            }
        }
    }
})

app.mount('#app')