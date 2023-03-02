// Problem 1://
/* Take a number as parameter. Multiply the number by 3, Add 10 with the result, after that Divided the result of sum by 2, and the final is Subtraction 5 from last result. Return the final result. */
function mindGame(number) {
    if (number >= 0) {
        const totalOfMultiplication = number * 3;
        const totalOfSum = totalOfMultiplication + 10;
        const totalOfDivision = totalOfSum / 2;
        const finalTotal = totalOfDivision - 5;
        return finalTotal
    } else {
        return "Please insert a positive number."
    };
};

const game = mindGame();


// Problem 2: //
/* Take a sentence as parameter. Count how many letters are there in the sentence. If sentence has even number of letters then return "even" else return "odd". */
function evenOdd(sentence) {
    let count = 0;
    if (typeof sentence == "string") {
        for (let i = 0; i < sentence.length; i++) {
            count += 1;
        };

        if (count % 2 == 0) {
            return "even";
        } else {
            return "odd";
        };
    } else {
        return "Invalid input. Insert any text."
    };
};

const getEvenOdd = evenOdd();


// Problem 3: //
/* Take a number as parameter and subtract it by 7. After that, if the result is more than or equal of 7 then return the input number multiply by 2, else return only the result. */
function isLGSeven(number) {
    if (typeof number == "number") {
        const result = number - 7;
        if (result >= 7) {
            return number * 2;
        } else {
            return result;
        };
    } else {
        return "Please insert a number"
    };
};

const LGSeven = isLGSeven();


// Problem 4: //
/* Take a Array of number as parameter. It may contain positive and negative number at the same time. We will count all the positive numbers as Good Data and negative will be Bad Data. Now, return how many Bad Data exists in the array.*/
function findingBadData(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            count += 1;
        };
    };
    return count;
};

const goodBad = findingBadData(ages)


// Problem 5: //
/* You have 3 friends, Each of them has a number of james. Now, multiply 1st firend's james by 21, by 32 of 2nd friend and 3rd friend by 43. Add all of them toghter. If the result is more than 2 times of 1000 then substract 2000 form result and return the new result. Else (less than 2 times of 1000) return the original result. */
function gemsToDiamond(firstNum, secondNum, thirdNum) {
    if (typeof firstNum == "number" && typeof secondNum == "number" && typeof thirdNum == "number") {
        const firstFriend = firstNum * 21;
        const secondFriend = secondNum * 32;
        const thirdFriend = thirdNum * 43;
        const total = firstFriend + secondFriend + thirdFriend;

        if (total >= 1000 * 2) {
            return total - 2000;
        } else {
            return total;
        };
    } else {
        return "invalid input"
    };
}

const totalDiamond = gemsToDiamond()