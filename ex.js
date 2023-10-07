//ex1
const ex1 = (arrStr) => {
    for (elem of arrStr) {
        if (typeof elem != "string") {
            console.log("array doesn't contain only strings")
            return
        }
    }

    return arrStr.join(" ")
}

console.log(ex1(["Ana", "are", "mere"]))

//ex2
const ex2 = (str1, str2) => {
    if ((typeof str1 != "string") || (typeof str2 != "string")){
        return -2
    }

    if (str1.length != str2.length) {
        return -1
    }

    diffPoz=0
    for (poz in str1){
        if (str1[poz] != str2[poz])
        diffPoz++
    }
    return diffPoz
}

console.log(ex2("Ana","Bnb"))

//ex3
const ex3 = (str,letter) => {
    if ((typeof str != "string") || (typeof letter != "string")) {
        return -2
    }
    if (letter.length != 1) { 
        return -1
    }

    letterCount=0
    for (elem of str) {
        if (elem == letter) {
            letterCount++
        }
    }
    return letterCount
}

console.log(ex3("Ana","a"))

//ex4
const ex4 = (arr1,arr2) => {
    if (arr1.length != arr2.length) {
        return -1
    }

    let arr = []
    for (poz in arr1){
        arr.push(arr1[poz])
        arr.push(arr2[poz])
    }
    return arr
}

console.log(ex4(["Ana","mere"],["are","!"]))

//ex5
const ex5 = (arr) => {
    sum = 0
    for (elem of arr) {
        if (isNaN(elem)) {
            return -1
        }
        sum+=elem
    }
    return sum/arr.length
}

console.log(ex5([5,6,7,"Ana"]))