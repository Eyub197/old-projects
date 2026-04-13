const age = 10
const day = "Sunday"

if(age >= 65){
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18){
    console.log("Each month you get a salary")
}else if (age < 18){
    console.log("You get an allowance")
}else{
    console.log("The value of the variable is not numeric")
}

switch(day){
    case "Monday":
        console.log("Grind the gym")
        break
    case "Tuesday":
        console.log("Grind the gym")
        break
    case "Wednesday":
        console.log("Grind the gym")
        break
    case "Thursday":
        console.log("Grind the gym")
        break
    case "Friday":
        console.log("Grind the gym")
        break
    case "Saturday":
        console.log("Grind the gym")
        break
    case "Sunday":
        console.log("Work")
        break
    default:
        console.log("Rest day")
        break
}
