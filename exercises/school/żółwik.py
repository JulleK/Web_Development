from turtle import *

bgcolor("black")
fillcolor("white")
pencolor("white")

def koch0(): 
    forward(100)
    lt(120)
    forward(100)
    lt(120)
    forward(100)

def koch1(): 
    for i in range(0, 6):
        forward(100)
        lt(120)
        forward(100)
        rt(60)

def koch2(n = 6, length = 15): 
    for n in range(0, n):
        for i in range(0, 3):
            forward(length)
            lt(120)
            forward(length)
            rt(60)
        forward(length)
        rt(60)
        forward(length)
        rt(60)

# def koch3(n = 3, k = 6, length = 15): 
#     for k in range(0, k):
#         for n in range(0, n):
#             for i in range(0, 3):
#                 forward(length)
#                 lt(120)
#                 forward(length)
#                 rt(60)
#             for l in range(0, 2):
#                 forward(length)
#                 rt(60)
#                 forward(length)
#                 rt(120)
#                 forward(length)
#                 rt(60)
#                 forward(length)
#                 rt(60)

def koch(bok, n):
    if n == 0: 
        fd(bok)
        return
    koch(bok / 3, n - 1)
    lt(60)
    koch(bok / 3, n - 1)
    rt(120)
    koch(bok / 3, n - 1)
    lt(60)
    koch(bok / 3, n - 1)

def platek(bok = 400, n = 0):
    for i in range(0, 3):
        koch(bok, n)
        rt(120)

def trojkat(bok = 200, n = 1):
    if n == 0:
        for i in range(3):
            fd(bok)
            lt(120)
        return
    trojkat(bok, n - 1)
    fd(bok/2)
    lt(60)
    trojkat(bok/2, n - 1)
    rt(60)
    bk(bok/2)


speed(1)
trojkat(n = 4)
tracer(0, 0)
penup()
bk(200)
pendown()

# platek(n = 5)
# update()

done()