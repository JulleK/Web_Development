# https://projecteuler.net/problem=54
"""
High Card: Highest value card.✔️
One Pair: Two cards of the same value.✔️
Two Pairs: Two different pairs.✔️
Three of a Kind: Three cards of the same value.✔️
Straight: All cards are consecutive values.
Flush: All cards of the same suit.✔️
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
"""

hierarchy = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"]

p1Hand = "5H 5C 5S 7S KD".split()
p2Hand = "7D 7S 7G 5S AC".split()

def checkFullHouse(hand):
    isThreeOfKind = checkThreeOfKind(hand)
    isOnePair = checkPairs(hand)
    if isOnePair and isThreeOfKind:
        pass
    else:
        pass
    pass

def checkFlush(hand):
    # ['5H', '5C', '5S', '7S', 'KD']
    firstCard = hand[0][1]
    for i in range(0, len(hand) - 1):
        if firstCard != hand[i][1]:
            return False

    return True

def checkThreeOfKind(hand): 
    for i in hand:
        for j in hand:
            for k in hand:
                if i == j or i == k or j == k:
                    continue
                if i[0] == j[0] and i[0] == k[0]: 
                    return True
    return False

def checkPairs(hand):
    pairs = []
    for i in hand:
        for j in hand:
            if i == j:
                continue
            if i[0] == j[0]: 
                pairs.append(i[0])
    pairs = set(pairs)
    return len(pairs)

def findHighestCard(hand):
    highest = 0
    for i in hand:
        card = i[0]
        cardIndex = hierarchy.index(card)
        if cardIndex > highest: 
            highest = cardIndex
        print(highest)

# findHighestCard(p1Hand)
# print(findPairs(p1Hand))
# print(checkThreeOfKind(p1Hand))
# print(checkThreeOfKind(p2Hand))
checkFullHouse(p2Hand)