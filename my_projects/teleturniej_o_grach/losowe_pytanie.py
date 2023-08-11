import random
pytania = [1,2,3,4,5,6,7,9,10,11,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,38,39,40]

while pytania:
    input("[Enter] to roll new question!")
    losowePytanie = random.choice(pytania)
    pytania.remove(losowePytanie)
    print(f"wylosowane pytanie to {losowePytanie}")
    print(pytania)
    print()