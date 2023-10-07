const student = {
    name: "Andrei",
    yearsOld: 22,
    printName: () => {
        console.log(student.name)
    },
    printName2: () => {
        console.log(this.name) //asa nu
    },
    printName3: function() {
        console.log(this.name) //asa merge
    }
}

// merge sa mai adaug valori dar reinitializare nu
// student.lastName = "Mihai"
student["lastName"] = "Mihai"

console.log(student.name)
console.log(student['name']) //sau ca la array-uri
student.printName()
student.printName2()
student.printName3()

console.log(Object.keys(student))
console.log(Object.values(student))