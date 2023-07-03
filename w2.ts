let number: number = 10
console.log(number)


{
    let myname: string ="saisa"
    console.log(`my name is ${myname}`)
}

let myname: string = "phak"
console.log(`my name is2 ${myname}`)


//Expression การดำเนิน
let w: number = 21
let h: number = 31
console.log(`พื้นที่สี่เหลี่ยมเท่ากับ ${w*h}`)


let colors: string[] = ["red", "blue", "green"]
console.log(colors)


let student = {
    stdid: 6315400030124,
    stdname: "Saisaart",
    major: "Computer EN",
    grade: 3.99
}
console.log(`รหัสนศ ${student.stdid}`)
console.log(`ชื่อนศ ${student.stdname}`)


// การกำหนดtype
type STUDENTTYPE = {
    id: string,
    name: string,
    ma: string,
    g: number
} 
let std:STUDENTTYPE = {
    id: "6315400030124" ,
    name: "Saisaart",
    ma: "Computer EN",
    g: 3.99
}
console.log(`เกรดนศ ${std.g}`)
console.log(`ชื่อนศ ${std.name}`)


let check: boolean = true;
let score1: number = 21;
let mgs: string = "Error";
let cars: string[] = ["Toyota", "Honda"];
let x: number;
console.log(mgs)


let showMsg: Function = function (msg){
    console.log(`แสดงข้อความ ${msg}`)
}
showMsg("TypeScript")


// const faculty = "Engineering"  (ค่าคงที่ ไม่สามารถเปลี่ยนค่าได้)


{
    let yourmane: string = process.argv[2]
    console.log(`ฉันมีนามว่า ${yourmane}`)
}

// ตัวเลขโดย process
{
    let salary = process.argv.slice(2)
    console.log(salary)
}


// การแปลงค่า 
let sc: string = "20";
let sc0: number = 20
let sc1: number = +sc
console.log(sc0*sc1)



let n1: number = 20
let n2: number = 30
let message: string;
if (n1 > n2){
    message = "n1 มากกว่า n2"
} else if (n2 > n1){
    message = "n2 มากกว่า n1"
} else{
    message = "n1 เท่ากับ n2"
}
console.log(message)



for (let i: number = 0; i <= 10; i++){
    console.log(i)
}
for (let index in cars){
    console.log(cars[index])
}