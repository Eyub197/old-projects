def computegrade (score):
    if score > 1.0 :
        return ("Error, Please enter score between 0.0 and 1.0")
    if score >= 0.9:
        return("grade A")
    elif score >= 0.8:
        return("grade B")
    elif score >= 0.7:
        return("grade C")
    elif score >= 0.6:
        return("grade D")
    elif score < 0.6:
        return("grade F")
    
score_input = input("Enter a score between 0.0 and 1.0: ")
try:
    score = float(score_input)
    print(computegrade(score))
except ValueError:
    print("Invalid input, please enter a numeric score")