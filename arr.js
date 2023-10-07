const arr = [1,2,3,4];

for (let i=0; i<= arr.length; i++){
    console.log(arr[i]);
}

for (let elem of arr){
    console.log(elem)
    console.log(typeof elem)
}

for (let poz in arr){
    console.log(poz)
    console.log(typeof elem)
}

arr.forEach(elem => {
    console.log(elem)
})

// forEach nu returneaza nimic, dar map returneaza
// in forEach nu se pot face request-uri async, dar in map da
const arr2 = arr.forEach((elem,poz) => {
    console.log("Elem:" + elem + ", poz:" + poz)
    console.log(`Elem: ${elem}, poz: ${poz}`)
})
console.log(arr2)

const arr3 = arr.map((elem,poz) => {
    console.log("Elem:" + elem + ", poz:" + poz)
    console.log(`Elem: ${elem}, poz: ${poz}`)

    return elem;
})
console.log(arr3)

