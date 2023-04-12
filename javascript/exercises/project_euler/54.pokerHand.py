# https://projecteuler.net/problem=54
"""
High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
"""

hierarchy = [2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K", "A"]

p1Hand = "5H 5C 5S 7S KD".split()
p2Hand = "7D 2S 5D 3S AC".split()
# print(p1Hand)
# print(p2Hand)

# def isOnePair(hand):
#     for i in hand:
#         for j in hand:
#             if i == j:
#                 continue
#             if i[0] == j[0]:
#                 return True
#     return False

def findPairs(hand):
    pairs = []
    for i in hand:
        for j in hand:
            if i == j:
                continue
            if i[0] == j[0]: 
                pairs.append(i[0])
    pairs = set(pairs)
    return len(pairs)

def checkThreeOfKind(hand): 
    for i in hand:
        for j in hand:
            for k in hand:
                if i == j or i == k or j == k:
                    continue
                if i[0] == j[0] and i[0] == k[0]: 
                    return True
    return False

# print(findPairs(p1Hand))
print(checkThreeOfKind(p1Hand))