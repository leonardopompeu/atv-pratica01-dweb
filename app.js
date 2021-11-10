document.addEventListener('DOMContentLoaded', () =>{
    // card options
    const cardsArray = [
        {
            name: 'triceratops',
            img: 'imagens/1.jpg'
        },
        {
            name: 'todomundo',
            img: 'imagens/2.jpg'
        },
        {
            name: 'buzz',
            img: 'imagens/3.jpg'
        },
        {
            name: 'porco',
            img: 'imagens/4.jpg'
        },
        {
            name: 'minadowoody',
            img: 'imagens/5.jpg'
        },
        {
            name: 'woody',
            img: 'imagens/6.jpg'
        },
        {
            name: 'rex',
            img: 'imagens/7.jpg'
        },
        {
            name: 'dogmola',
            img: 'imagens/8.jpg'
        },
        {
            name: 'barbie',
            img: 'imagens/9.jpg'
        },
        {
            name: 'batata',
            img: 'imagens/10.jpg'
        },
        {
            name: 'batato',
            img: 'imagens/11.jpg'
        },
        {
            name: 'ursorosa',
            img: 'imagens/12.jpg'
        },{
            name: 'triceratops',
            img: 'imagens/1.jpg'
        },
        {
            name: 'todomundo',
            img: 'imagens/2.jpg'
        },
        {
            name: 'buzz',
            img: 'imagens/3.jpg'
        },
        {
            name: 'porco',
            img: 'imagens/4.jpg'
        },
        {
            name: 'minadowoody',
            img: 'imagens/5.jpg'
        },
        {
            name: 'woody',
            img: 'imagens/6.jpg'
        },
        {
            name: 'rex',
            img: 'imagens/7.jpg'
        },
        {
            name: 'dogmola',
            img: 'imagens/8.jpg'
        },
        {
            name: 'barbie',
            img: 'imagens/9.jpg'
        },
        {
            name: 'batata',
            img: 'imagens/10.jpg'
        },
        {
            name: 'batato',
            img: 'imagens/11.jpg'
        },
        {
            name: 'ursorosa',
            img: 'imagens/12.jpg'
        }
    ]

    cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create game board
    function createBoard(){
        for (let i = 0; i< cardsArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'imagens/frenteresized.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    createBoard()

    //check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionsOneId = cardsChosenId[0]
        const optionsTwoId = cardsChosenId[1]
        if(cardsArray[cardsChosenId[0]].name === cardsArray[cardsChosenId[1]].name){
            alert('Match')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionsOneId].setAttribute('src', 'imagens/frenteresized.jpg')
            cards[optionsTwoId].setAttribute('src', 'imagens/frenteresized.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardsArray.length/2){
            resultDisplay.textContent = 'Parabens !'
        }
    }

    //flip card
    function flipCard(){    
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId.name])
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

})