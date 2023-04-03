'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// function logger() {
//     console.log('My name is Octi');
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = 'Juice wiht ${aplles} apples and ${orange} oranges.';
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const calcage = function(birthyear) {
//     return 2023 - birthyear;
// }

// arrow function
// const calcage3 = birthyear => 2023 - birthyear;
// console.log(calcage3(2000))

// const yearsUntilRetirment = (birthyear, firstname) => {
//     const retirement = 65 - calcage3(birthyear);
//     return `${firstname} has ${retirement} years until retirement`
// }

// console.log(yearsUntilRetirment(2000, 'Octi'));

// const aveScore = (score1, score2, score3) => {
//     return (score1 + score2 + score3)/3;
// }

// const checkWinner = function(team1Name, team2Name, avgDolhins, avgKoalas) {
//     if(avgDolhins >= 2 * avgKoalas) {
//         return `${team1Name} win (${avgDolhins} vs. ${avgKoalas})`;
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         return `${team2Name} win (${avgKoalas} vs. ${avgDolhins})`;
//     } else {
//         return 'no one yet wins'
//     }
// }

// let D = [44, 23, 71];
// let K = [107, 80, 90];
// const res = checkWinner('Dolhins', 'Koalas', aveScore(D[0], D[1], D[2]), aveScore(K[0], K[1], K[2]))
// console.log(res);

const mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass: 78,
    height : 1.69,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
    compareBMI: function(other) {
        if(this.calcBMI() > other.calcBMI()) {
            return true;
        } else {
            return false
        }
    }
}

const john = {
    firstName : 'John',
    lastName : 'Smith',
    mass: 92,
    height : 1.95,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    }, 
    
    compareBMI: function(other) {
        if(this.calcBMI() > other.calcBMI()) {
            console.log(this.BMI, other.BMI);
            return true;
        } else {
            console.log(this.calcBMI(), other.BMI);
            return false
        }
    }
}

function comparing(p1, p2) {
    if(p1.compareBMI(p2)) {
        console.log(`${p1.firstName} ${p1.lastName} 's BMI (${p1.BMI}) 
        is higher than ${p2.firstName} ${p2.lastName} 's BMI (${p2.BMI})!`)
    } else {
        console.log(`${p1.firstName} ${p1.lastName} 's BMI (${p1.BMI}) 
        is at most ${p2.firstName} ${p2.lastName} 's BMI (${p2.BMI})!`)
    }
}

comparing(mark, john);



