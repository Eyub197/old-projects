#Score   Grade
#>= 0.9     A
#>= 0.8     B
#>= 0.7     C
#>= 0.6     D
 #< 0.6     F
 

try :
    n = float(input("Enter Grade: "))
except :
    print ("Error, Please enter score between 0.0 and 1.0")
    quit()
if n > 1.0 :
    print ("Error, Please enter score between 0.0 and 1.0")
if n >= 0.9:
    print("grade A")
elif n >= 0.8:
    print("grade B")
elif n >= 0.7:
    print("grade C")
elif n >= 0.6:
    print("grade D")
elif n < 0.6:
    print("grade F")
