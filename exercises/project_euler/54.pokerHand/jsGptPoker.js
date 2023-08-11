const fs = require('fs');

// Define card values and suits
const values = '23456789TJQKA';
const suits = 'SHDC';

// Parse a card string into its value and suit
function parseCard(card) {
    const value = values.indexOf(card[0]);
    const suit = suits.indexOf(card[1]);
    return { value, suit };
}

// Determine the rank of a hand
function getRank(hand) {
    const counts = Array(13).fill(0);
    const suits = new Set();
    let isStraight = true;
    let straightValue = -1;

    for (const card of hand) {
        const { value, suit } = parseCard(card);
        counts[value]++;
        suits.add(suit);
        if (straightValue === -1 || straightValue === value - 1) {
            straightValue = value;
        } else {
            isStraight = false;
        }
    }

    const numValues = counts.filter(count => count > 0).length;
    const maxCount = Math.max(...counts);
    const maxIndex = counts.indexOf(maxCount);

    if (numValues === 5 && isStraight && suits.size === 1) {
        return { rank: 9, value: straightValue };
    } else if (numValues === 5 && isStraight) {
        return { rank: 5, value: straightValue };
    } else if (numValues === 5 && suits.size === 1) {
        return { rank: 6, value: maxIndex };
    } else if (numValues === 4) {
        return { rank: 2, value: maxIndex };
    } else if (numValues === 3 && maxCount === 3) {
        return { rank: 4, value: maxIndex };
    } else if (numValues === 3 && maxCount === 2) {
        const pairIndex = counts.indexOf(2);
        return { rank: 7, value: maxIndex * 13 + pairIndex };
    } else if (numValues === 2 && maxCount === 3) {
        const pairIndex = counts.indexOf(2);
        return { rank: 8, value: maxIndex * 13 + pairIndex };
    } else if (numValues === 2 && maxCount === 4) {
        const pairIndex = counts.indexOf(1);
        return { rank: 3, value: maxIndex * 13 + pairIndex };
    } else {
        return { rank: 1, value: maxIndex };
    }
}

// Load hands from file
const data = fs.readFileSync('C:\\Users\\Julek\\Desktop\\Programming\\Web_development\\web_developer_bootcamp\\exercises\\project_euler\\54.pokerHand\\poker.txt', 'utf8');
const hands = data.trim().split('\n').map(line => line.split(' '));

// Count the number of hands won by Player 1
let count = 0;
for (const hand of hands) {
    const rank1 = getRank(hand.slice(0, 5));
    const rank2 = getRank(hand.slice(5));
    if (rank1.rank > rank2.rank) {
        count++;
    } else if (rank1.rank === rank2.rank && rank1.value > rank2.value) {
        count++;
    }
}
console.log(count);