///через function и while


var numbers = 2;

function primeNum (num) {
    var i = 2;
    while (i < num / 2) {
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}

while (numbers <= 100) {
    if(primeNum(numbers)){
        console.log(numbers);
    }
    numbers++;
}

///через while

var i = 2;

while (i <= 100) {
    var j = 2;
    while (j <= i) {
        if (i%j == 0) {
            break;
        }
        j++;
    }
    if (j == i) {
        console.log(i);
    }
    i++;
}