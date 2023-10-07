const arr = [1,2,3,4];

//asa merge
arr.push(5)
console.log(arr)

//reinitializare nu merge
// arr = [1]
// console.log(arr)

//pop sterge ultima pozitie
removedElement = arr.pop()
console.log(removedElement)
console.log(arr)

//returneaza primul element care respecta conditia
console.log(arr.find(elem => elem >= 2))

const newArr = arr.filter(elem => elem>2);
console.log(newArr)