# Define a function to determine the rank of a hand
def rank_hand(hand):
    values = [card[0] for card in hand]
    suits = [card[1] for card in hand]
    
    # Check for a royal flush
    if set(values) == {'T', 'J', 'Q', 'K', 'A'} and len(set(suits)) == 1:
        return 10
    
    # Check for a straight flush
    if sorted(values) == ['2', '3', '4', '5', 'A'] and len(set(suits)) == 1:
        return 9
    if all([ord(values[i+1]) == ord(values[i])+1 for i in range(4)]) and len(set(suits)) == 1:
        return 8
    
    # Check for four of a kind
    if any([values.count(v) == 4 for v in set(values)]):
        return 7
    
    # Check for a full house
    if set(values) == 2 and any([values.count(v) == 3 for v in set(values)]):
        return 6
    
    # Check for a flush
    if len(set(suits)) == 1:
        return 5
    
    # Check for a straight
    if sorted(values) == ['2', '3', '4', '5', 'A'] or all([ord(values[i+1]) == ord(values[i])+1 for i in range(4)]):
        return 4
    
    # Check for three of a kind
    if any([values.count(v) == 3 for v in set(values)]):
        return 3
    
    # Check for two pairs
    if len(set([v for v in set(values) if values.count(v) == 2])) == 2:
        return 2
    
    # Check for one pair
    if any([values.count(v) == 2 for v in set(values)]):
        return 1
    
    # Otherwise, the rank is determined by the highest card
    return 0

# Read in the hands from the file
with open('C:\\Users\\Julek\\Desktop\\Programming\\Web_development\\web_developer_bootcamp\\exercises\\project_euler\\54.pokerHand\\poker.txt', 'r') as f:
    hands = [line.strip().split() for line in f]

# Count the number of hands won by player 1
count = 0
for hand in hands:
    rank1 = rank_hand(hand[:5])
    rank2 = rank_hand(hand[5:])
    if rank1 > rank2:
        count += 1
    elif rank1 == rank2:
        values1 = sorted([card[0] for card in hand[:5]], key=lambda x: ord(x), reverse=True)
        values2 = sorted([card[0] for card in hand[5:]], key=lambda x: ord(x), reverse=True)
        for i in range(5):
            if ord(values1[i]) > ord(values2[i]):
                count += 1
                break
            elif ord(values1[i]) < ord(values2[i]):
                break

print(count)
