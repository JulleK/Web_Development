# https://projecteuler.net/problem=54
"""
High Card: Highest value card.✔️                                        0
One Pair: Two cards of the same value.✔️                                1
Two Pairs: Two different pairs.✔️                                       2
Three of a Kind: Three cards of the same value.✔️                       3
Straight: All cards are consecutive values.✔️                           4
Flush: All cards of the same suit.✔️                                    5
Full House: Three of a kind and a pair.✔️                               6
Four of a Kind: Four cards of the same value.✔️                         7
Straight Flush: All cards are consecutive values of same suit.✔️        8
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.✔️               9
"""

def main(game, p1Wins):
    p1Hand = game[:14].split()
    p2Hand = game[15:].split()
    # print(f"{p1Hand} | {p2Hand}")

    p1Value = evaluateHand(p1Hand)
    p2Value = evaluateHand(p2Hand)
    # print(f"{p1Value} | {p2Value}")

    if p1Value["value"] > p2Value["value"]:
        return p1Wins + 1

    elif p1Value["value"] == p2Value["value"]:
        if p1Value["highest"] > p2Value["highest"]:
            return p1Wins + 1
        elif p1Value["highest"] < p2Value["highest"]:
            return p1Wins
        elif p1Value["highest"] == p2Value["highest"]:
            excluded = []
            for i in range(5):
                excluded.append(p1Value["highest"])
                p1Value["highest"] = findHighestCard(p1Hand, excluded)
                p2Value["highest"] = findHighestCard(p2Hand, excluded)
                if p1Value["highest"] > p2Value["highest"]:
                    return p1Wins + 1
                elif p1Value["highest"] < p2Value["highest"]:
                    return p1Wins
        else:
            p1HighPair = max(p1Value["pairs"])
            p2HighPair = max(p2Value["pairs"])
            if p1HighPair > p2HighPair:
                return p1Wins + 1
    return p1Wins
    
def checkRoyalFlush(hand):
    if not checkFlush(hand):
        return False

    royalCards = ["T", "J", "Q", "K", "A"]
    hand = {card[0] for card in hand if card[0] in royalCards}
    if len(hand) != 5:
        return False
    return True

def checkStraigthFlush(hand):
    if checkFlush(hand) and checkStraigth(hand):
        return True
    return False

def checkFourOfKind(hand):
    # ['5H', '5C', '5S', '4S', '5D'] -> ['5', '5', '5', '4', '5']
    hand = [card[0] for card in hand]
    if hand.count(hand[0]) == 4:
        return hand[0]

    elif hand.count(hand[1]) == 4:
        return hand[1]
    return False

def checkFullHouse(hand):
    threeOfKind = checkThreeOfKind(hand) 
    isOnePair = checkPairs(hand, threeOfKind)

    if threeOfKind != False and len(isOnePair) == 1:
        return threeOfKind
    return False

def checkFlush(hand):
    firstCard = hand[0][1]
    for i in range(0, len(hand) - 1):
        if firstCard != hand[i][1]:
            return False
    return True

def checkStraigth(hand):
    convertedHand = list(map(cardValueConvert, hand)) 
    convertedHand.sort()

    for i in range(len(convertedHand) - 1):
        # if card + 1 is not the same as the next card 
        if convertedHand[i] + 1 != convertedHand[i + 1]:
            return False 
            
    return True

def checkThreeOfKind(hand): 
    for i in hand:
        for j in hand:
            for k in hand:
                if i == j or i == k or j == k:
                    continue
                if i[0] == j[0] and i[0] == k[0]: 
                    return i[0]
    return False

def checkPairs(hand, excludedCard=False):
    pairs = []
    for i in hand:
        for j in hand:
            if i == j:
                continue
            if i[0] == excludedCard:
                continue
            elif i[0] == j[0]: 
                pairs.append(i[0])
   
    pairs = set(pairs)
    return pairs

def findHighestCard(hand, excludedCards=[]):
    highest = 0
    for i in hand:
        card = i[0]
        cardValue = cardValueConvert(card)
        if cardValue in excludedCards:
            continue
        
        elif cardValue > highest: 
            highest = cardValue
    return highest

def cardValueConvert(card):
    # ['3H', '2C', '5S', '4S', 'KD'] -> [3, 2, 5, 4, 13]
    specialCards = { "T": 10, "J": 11, "Q": 12, "K": 13, "A": 14 }
    cardValue = card[0]
    if cardValue in specialCards:
        return specialCards[cardValue]
    else:
        return int(cardValue)

def evaluateHand(hand):
    handValue = {"value": 0, "highest": 0}
    if checkRoyalFlush(hand):
        handValue["value"] = 9
        return handValue

    elif checkStraigthFlush(hand):
        handValue["value"] = 8
        handValue["highest"] = findHighestCard(hand)
        return handValue

    elif checkFourOfKind(hand) != False:
        handValue["value"] = 7
        handValue["highest"] = checkFourOfKind(hand)
        return handValue

    elif checkFullHouse(hand) != False:
        handValue["value"] = 6
        handValue["highest"] = checkFullHouse(hand)
        return handValue

    elif checkFlush(hand):
        handValue["value"] = 5
        handValue["highest"] = findHighestCard(hand)
        return handValue

    elif checkStraigth(hand):
        handValue["value"] = 4
        handValue["highest"] = findHighestCard(hand)
        return handValue

    elif checkThreeOfKind(hand):
        handValue["value"] = 3
        handValue["highest"] = checkThreeOfKind(hand)
        return handValue

    # check two pairs
    elif len(checkPairs(hand)) == 2:
        handValue["value"] = 2
        handValue["pairs"] = checkPairs(hand)
        return handValue 

    # check one pair
    elif len(checkPairs(hand)) == 1:
        handValue["value"] = 1
        handValue["pairs"] = checkPairs(hand)
        return handValue

    # high card
    else:
        handValue["highest"] = findHighestCard(hand)
        return handValue

filename = 'C:\\Users\\Julek\\Desktop\\Programming\\Web_development\\web_developer_bootcamp\\exercises\\project_euler\\54.pokerHand\\poker.txt'

games = []
with open(filename) as fileObject:
    lines = fileObject.readlines()
    for line in lines:
        games.append(line.rstrip())


p1Win = 0
for game in games:
    p1Win = main(game, p1Win)
print(p1Win)
