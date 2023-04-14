// ['5H', '3C', '5S', '7S', 'KD'] -> [3, 5, 5, 7, 13]
const hand = ['3H', '5C', 'TS', '7S', 'KD']

const specialCards = { "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 }
const numHand = hand.map(function (card) {
    let cardValue = card[0]
    if (Object.hasOwn(specialCards, cardValue))
        return specialCards[cardValue]
    else
        return Number(cardValue)
})

numHand.sort((a, b) => {
    return a - b
})
console.log(numHand)