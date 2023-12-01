def sum():
    a = int(input("how old are you"))

    if(a<16):
        print("you can't drive")
    elif(a<18 ):
        print("you can drive but not vote")
    elif( a<=24):
        print("you can vote not rent a car")
    else:
        print("you ca do pretty much can do any thing")

        drive = a
        return drive
d= sum()
print(d)        