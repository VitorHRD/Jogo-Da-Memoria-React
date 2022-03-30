let game = {
    lockMode: false,
    firstCard: null,
    secondCard: null,
    techs: ['bootstrap',
        'css',
        'electron',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react',
        'firebase',
    ],
    cards: null,
    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];
        if (card.flipped || this.lockMode) {
            return false;
        }
        if (!this.firstCard) {
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        }
        else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },
    checkMarch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false
        }

        return this.firstCard.icon === this.secondCard.icon;

    },
    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },
    CheckGameOver() {
        return this.cards.filter(card => !card.flipped).length === 0;


    },

    uplvl: function () {
        if (this.techs.length < 12) {
            this.techs = ['bootstrap',
                'css',
                'electron',
                'html',
                'javascript',
                'jquery',
                'mongo',
                'node',
                'react',
                'firebase',
                'python',
                'java',]
        }
        else {
            this.techs = ['bootstrap',
                'css',
                'electron',
                'html',
                'javascript',
                'jquery',
                'mongo',
                'node',
                'react',
                'firebase',
                'python',
                'java',
                'angular',
                'elixir']
        }
    },



    createCardsFromTechs: function () {
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards.push(this.createPairFromTech(tech));

        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards
    },
    createPairFromTech: function (tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
        }
        ]
    },
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000);
    },
    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;

        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]];

        }
    },
    flipCard: function (cardId, gameOverCallBack, noMatchCallback) {
        if (this.setCard(cardId)) {
            if (this.secondCard) {
                if (this.checkMarch()) {
                    this.clearCards();
                }
                    if (this.CheckGameOver()) {
                        gameOverCallBack()
                    }
                    else {
                        setTimeout(() => {
                            //No match
                            this.unflipCards();
                            noMatchCallback()
                        }, 1000);
                    };
                }
            }
        }
    }

export default game