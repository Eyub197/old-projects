
try:
   hrs = float(input("Enter Hours: "))
   rt = float(input("Enter rate: "))
except ValueError:
    print("Please write numbers for Hours and rate")
else:
    if hrs < 40:
        print(hrs * rt)
    else:
        print((40 * rt) + ((hrs - 40) * (1.5 * rt)))
