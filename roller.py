from random import randrange
from dice import dice


def ThreeDSix():
    total = dice(6) + dice(6) + dice(6)
    return total

def FourDSix():
    total = 0
    min = 7
    for i in range(4):
        diceRoll = dice(6)
        total += diceRoll
        if diceRoll < min:
            min = diceRoll
    return total - min

def Stats(minimum = 70):
    stats = []
    for i in range(3):
        stats.append(ThreeDSix())
    for i in range(3):
        stats.append(FourDSix())  
    total = sum(stats)
    if total < minimum:
        Stats()
    else:
        stats.sort(reverse=True)
        print("Total: ", total)
        print("Stats: ", stats)