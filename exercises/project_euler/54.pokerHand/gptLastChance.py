# Load the poker hands from file
with open('C:\\Users\\Julek\\Desktop\\Programming\\Web_development\\web_developer_bootcamp\\exercises\\project_euler\\54.pokerHand\\poker.txt', 'r') as f:
    hands = [line.strip().split() for line in f]

# Define a function to get the rank of a hand
def get_rank(hand):
    values = sorted(['--23456789TJQKA'.index(card[0]) for card in hand], reverse=True)
    suits = [card[1] for card in hand]
    is_flush = len(set(suits)) == 1
    is_straight = len(set(values)) == 5 and (values[0] - values[-1] == 4)
    if is_straight and is_flush:
        return 9, values[0]
    elif [values.count(x) for x in values].count(4) == 1:
        return 8, values[0], values[4]
    elif [values.count(x) for x in values].count(3) == 1 and [values.count(x) for x in values].count(2) == 1:
        return 7, values[0], values[4]
    elif is_flush:
        return 6, values[0], values[1], values[2], values[3], values[4]
    elif is_straight:
        return 5, values[0]
    elif [values.count(x) for x in values].count(3) == 1:
        return 4, values[0], values[4], values[1]
    elif [values.count(x) for x in values].count(2) == 2:
        pairs = sorted(set([v for v in values if values.count(v) == 2]), reverse=True)
        non_pairs = sorted(set([v for v in values if values.count(v) != 2]), reverse=True)
        return 3, pairs[0], pairs[1], non_pairs[0]
    elif [values.count(x) for x in values].count(2) == 1:
        pair = values[[values.count(x) for x in values].index(2)]
        non_pairs = sorted([v for v in values if v != pair], reverse=True)
        return 2, pair, non_pairs[0], non_pairs[1], non_pairs[2]
    else:
        return 1, values[0], values[1], values[2], values[3], values[4]

# Count the number of hands won by player 1
count = 0
for hand in hands:
    rank1 = get_rank(hand[:5])
    rank2 = get_rank(hand[5:])
    if rank1 > rank2:
        count += 1
    elif rank1 == rank2:
        values1 = sorted(['--23456789TJQKA'.index(card[0]) for card in hand[:5]], reverse=True)
        values2 = sorted(['--23456789TJQKA'.index(card[0]) for card in hand[5:]], reverse=True)
        for i in range(len(values1)):
            if values1[i] > values2[i]:
                count += 1
                break
            elif values1[i] < values2[i]:
                break

# Print the result
print(count)
