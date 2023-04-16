# Function to determine the rank of a hand
def rank(hand):
    values = [card[0] for card in hand]
    suits = [card[1] for card in hand]
    value_counts = {value: values.count(value) for value in set(values)}
    is_flush = len(set(suits)) == 1
    is_straight = len(set(values)) == 5 and (max(values) - min(values) == 4)
    if is_straight and is_flush and max(values) == 14:
        return "Royal Flush"
    elif is_straight and is_flush:
        return "Straight Flush"
    elif 4 in value_counts.values():
        return "Four of a Kind"
    elif sorted(value_counts.values()) == [2, 3]:
        return "Full House"
    elif is_flush:
        return "Flush"
    elif is_straight:
        return "Straight"
    elif 3 in value_counts.values():
        return "Three of a Kind"
    elif sorted(value_counts.values()) == [1, 2, 2]:
        return "Two Pairs"
    elif 2 in value_counts.values():
        return "One Pair"
    else:
        return "High Card"

# Function to compare two hands
def compare(hand1, hand2):
    rank1 = rank(hand1)
    rank2 = rank(hand2)
    values1 = sorted([card[0] for card in hand1], reverse=True)
    values2 = sorted([card[0] for card in hand2], reverse=True)
    if RANKS.index(rank1) > RANKS.index(rank2):
        return 1
    elif RANKS.index(rank1) < RANKS.index(rank2):
        return 2
    else:
        for i in range(5):
            if VALUES.index(values1[i]) > VALUES.index(values2[i]):
                return 1
            elif VALUES.index(values1[i]) < VALUES.index(values2[i]):
                return 2
        return 0

# Constants for ranking
RANKS = [
    "High Card",
    "One Pair",
    "Two Pairs",
    "Three of a Kind",
    "Straight",
    "Flush",
    "Full House",
    "Four of a Kind",
    "Straight Flush",
    "Royal Flush"
]
VALUES = [
    "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"
]

# Read the input file
with open("C:\\Users\\Julek\\Desktop\\Programming\\Web_development\\web_developer_bootcamp\\exercises\\project_euler\\54.pokerHand\\poker.txt", "r") as f:
    hands = [line.strip().split() for line in f.readlines()]

# Count the number of wins for Player 1
num_wins = 0
for hand in hands:
    hand1 = hand[:5]
    hand2 = hand[5:]
    result = compare(hand1, hand2)
    if result == 1:
        num_wins += 1

print("Player 1 wins:", num_wins)
