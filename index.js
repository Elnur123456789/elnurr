function kvadratTenlik(a, b, c) {
    const D = b * b - 4 * a * c; 

    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2 * a);
        const x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(`Heller: x1 = ${x1}, x2 = ${x2}`);
    } else if (D === 0) {
        const x = -b / (2 * a);
        console.log(`Beraber hell: x = ${x}`);
    } else {
        console.log("Helli yoxdur");
    }
}






const arr = [2, 4, 5, 9, 1];

function maxElementIndex(array) {
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}
const index = maxElementIndex(arr);
console.log(`Maksimum elementin indeksi: ${index}`);