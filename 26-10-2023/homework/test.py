# def sm():
#     a=8
#     if(a%2==0):
#         print("even")
#     else:
#         print("odd")
#         res = a
#         return res
# s = sm()
# print(s)

list1 =int(input("enter your age"))
for num in range(1,list1 + 1):
    if num % 2 != 0:
        print(num)

list1 = int(input("enter your day "))
day = ["sunday","monday","sunday","tuesday","wednesday","thuresday","friday"]
for fh in range(len(day)):
    if( list1 == fh):
        print(day[fh])

list1 = [23, 4, -6, 23, -9, 21, 3, -45, -8]
for d in range(len(list1)):
    if(d %1==0):
         print(list1[d])
         

    




