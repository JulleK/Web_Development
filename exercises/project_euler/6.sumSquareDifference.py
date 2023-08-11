def square(num):
    return num ** 2

def sum_of_squares(max_num):
    sum = 0
    for i in range(1, max_num + 1):
        sum += square(i)
    return sum
    
def square_sum(max_num):
    sum = 0
    for i in range(1, max_num + 1):
        sum += i
    return square(sum)

max_num = 100
sum = sum_of_squares(max_num)
sum2 = square_sum(max_num)

print(sum2 - sum)