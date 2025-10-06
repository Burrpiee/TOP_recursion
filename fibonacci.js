function fibs(n) {
    let a = 0;
    let b = 1;
    let array = [];

    for(let i = 0; i < n; i++) {
        array.push(a);

        let temp = a;
        a = b;
        b = temp + b;
    }

    return array;
}

function fibsRec(n) {
    if (n <= 0) return [];
    else if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        let prevFibs = fibsRec(n - 1);

        let nextFib = prevFibs[prevFibs.length - 1] +
        prevFibs[prevFibs.length - 2];

        prevFibs.push(nextFib);

        return prevFibs;
    }
}   

console.log(fibsRec(8));