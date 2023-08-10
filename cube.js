// problem-01................................................
function cubeNumber(number) {
    if (typeof number !== 'number') {
        return 'please provide me a valid number'
    }

    else {
        const result = Math.pow(number,3);
        return result;
    }

}
console.log(cubeNumber(4));





// problem-2..................................................

function matchFinder(string1, string2) {
    if ((typeof string1 !== 'string'&& typeof string2 !== 'string')||(typeof string1 !=='string'||typeof string2 !=='string') ) {
        return 'please provide me a valid string'

    }

    if (typeof string1 == 'string'&& typeof string2 == 'string') {
        
     
       const result= string1.includes(string2)
       return result;


    }
    else {
        return false;
    }
   
    
}
console.log(matchFinder('javaScript','Code'))






// problem-03......................................



function sortMaker(arr) {
    if (arr[0] < 0 ||arr[1] < 0) {
        return 'Invalid Input'
    }

    if (arr[0] === arr[1]) {
        return 'equal'
    }

    else {
        return [Math.max(arr[0], arr[1]), Math.min(arr[0], arr[1])]
    }

}
console.log(sortMaker([4, -2]));

// problem-04.........................................

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'please provide me a valid object'
        
    }
    else{
        const street = obj.street || '__'
        const house = obj.house || '__'
        const society = obj.society || '__'
        return street + ',' +house + ',' +society

    }
}

console.log(findAddress({street:10,house:'15A', society:"Earth perfect"}));

// problem-05.......................

function canPay(changeArray, totalDue) {
    let changeArraySum = 0;
    for(let i =0; i < changeArray.length; i++){
        const index = i;
        const element = changeArray[index]
        changeArraySum = changeArraySum + element;
    
    }
    if (changeArray.length ===0) {
        return 'please provide me first input '
    }

    if (changeArraySum>=totalDue) {
        return true;
    }
    else {
        return false;
        
    }

}
console.log(canPay([1,5,5],10));