
def computepay(hrs, rt):
    if hrs < 40:
        return(hrs * rt)
    else:
        return((40 * rt) + ((hrs - 40) * (1.5 * rt)))       
        
hrs_input = float(input("hours ?"))
hrs = hrs_input
rt_input = float(input("rate ?"))
rt = rt_input

print(computepay(hrs, rt))





            
