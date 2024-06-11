import dice
import roller

def diceMenu():
    print("How many and what kind of dice would you like to roll?")
    input2 = input("Type it in the format '3d6'")

    d = input2.find("d")
    diceType = int(input2[d+1:])
    for i in range(int(input2[0:d])):
        print(dice.dice(diceType), end = " ")
    print()

def rollMenu():
    print("Would you like to roll Stats or Dice or Exit?")
    while True:
        input1 = input("Type 'Stats' or 'Dice' or 'Exit': ")
        if input1 == "Stats":
            statMinimum = int(input("Enter minimum total for stats: "))
            roller.Stats(statMinimum)
        elif input1 == "Dice":
            diceMenu()
        elif input1 == "Exit":
            return
        else:
            print("Invalid input")

if __name__ == "__main__":
    rollMenu()
