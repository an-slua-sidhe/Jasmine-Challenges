function whatCanIDrink(age){
    if(age < 0){
        return "Sorry. I can't tell you what drink to have because that age you aren't even born yet!"
    }
    if(age < 14){
        return "Drink Tanora";
    }
    if(age < 18 && age >= 14){
        return "Drink Coke";
    }
    if(age < 21 && age >= 18){
        return "Drink Beer";
    }
    if(age < 130 && age >= 21){
        return "Drink Hist Sap";
    } else {
        return "Sorry. I can't tell you what drink to have because that age doesn't make sense! :-)"
    }
}