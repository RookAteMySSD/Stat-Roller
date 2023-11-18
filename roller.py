from random import randrange
from dice import d6
from dice import d6


def ThreeDSix():
    total = d6() + d6() + d6()
    return total

def FourDSix():
    total = 0
    min = 7
    for i in range(4):
        diceRoll = d6()
        total += diceRoll
        if diceRoll < min:
            min = diceRoll
    return total - min

def Stats():
    stats = []
    for i in range(3):
        stats.append(ThreeDSix())
    for i in range(3):
        stats.append(FourDSix())  
    total = sum(stats)
    if total < 70:
        print("Total: ", total)
        print("Stats: ", stats)
        print("Total too low, rerolling...")
        Stats()
    else:  
        print("Total: ", total)
        print("Stats: ", stats)

if __name__ == "__main__":
    Stats()



