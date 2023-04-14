numberFound = False
smol=0 
while not numberFound:
    for num in range (1,21):
        if smol == 0:
            smol += 90
        if smol % num != 0:
            smol += 90
            break
        if num == 20:
            numberFound = True
print(smol)