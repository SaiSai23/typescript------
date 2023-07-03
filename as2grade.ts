let salary = process.argv.slice(2)
let salar: number = +salary
let sum: number = 0
for (let x in salary){
    let sum1: number = +salary[x]
    sum = sum +sum1
}
console.log(`ผลรวมเลขเท่ากับ ${sum}`)


let g1: number = sum
let message: string;
if (g1 >= 80){
    message = "เกรด A"
} 
else if (g1 >= 70){
    message = "เกรด B"
} 
else if (g1 >= 60){
    message = "เกรด C" 
} 
else if (g1 >= 50){
    message = "เกรด D"
} 
else{
    message = "เกรด F"
}
console.log(`เกรดเท่ากับ ${message}`)
