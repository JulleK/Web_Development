# A palindromic number reads the same both ways. The largest palindrome made 
# from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

def isPalindrome(string):
    if string == string[::-1]:
        return True
    else:
        return False

def findPalNums():
    palNums = []
    searchNums = True
    while searchNums:
        for i in range(999, 500, -1):
            for j in range(999, 500, -1):
                num = j * i
                num = str(num)

                if isPalindrome(num):
                    palNums.append(num)
        searchNums = False

    palNums = set(palNums)
    return palNums

def findLargest(palNums):
    largest = 0
    for num in palNums:
        num = int(num)
        if num > largest:
            largest = num
    return largest

num = "5005"
palNums = findPalNums()

print(findLargest(palNums))
