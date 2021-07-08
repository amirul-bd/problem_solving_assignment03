// https://github.com/amirul-bd/problem_solving_assignment03


//Convert Kilometer to meter
function kilometerToMeter(km) {
    if (km < 0) {
        return "Kilometer must be positive"
    } else {
        //We know one kilometer = 1000 meter;
        return km * 1000;
    }
}



//Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        //Input must be positive
        return "Wrong input"
    }
    else {
        //Watch price 50 per unit
        let firstInput = watch * 50;
        //mobile price 100 per unit
        let secondInput = phone * 100;
        //laptop price 500 per unit
        let thirdInput = laptop * 500;
        let total = firstInput + secondInput + thirdInput;
        return total;
    }
}



//Find the Hotel Cost
function hotelCost(days) {
    let totalCost = 0;
    if (days < 0) {
        //Input must be positive
        return "worng Input"
    }
    else if (days <= 10) {
        // 1 to 10 days, par days cost is 100;
        totalCost = days * 100;
    }
    else if (days <= 20) {
        let firstPart = 10 * 100;
        // 11 to 20 days, par days cost is 80;
        let remainingDays = days - 10;
        let secondPart = remainingDays * 80;
        totalCost = firstPart + secondPart;
    }
    else {
        let firstPart = 10 * 100;
        let secondPart = 10 * 80;
        // 21 to infinity days, par days cost is 50;
        let remainingDays = days - 20;
        let thirdPart = remainingDays * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
    return totalCost;
}



//Find the largest element of an array
function megaFriend(friends) {
    let largestName = [];
    for (let i = 0; i < friends.length; i++) {
        let element = friends[i]
        if (largestName.length < element.length) {
            largestName = element;
        }
    }
    return largestName;
}