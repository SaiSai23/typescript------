import { receiveMessageOnPort } from "worker_threads";

function showTitle(){
    console.log("My website Tiltle")
}
showTitle();


function getText(txt: string){
    console.log(`show: ${txt}`)
}
getText("have fun");


function sumNumber(n1: number, n2: number){
    return n1+n2
}
let res = sumNumber(23,96)
console.log(`ผลบวกเท่ากับ ${res}`)


function sumBMI(w1: number, h1: number){
    return w1/(h1*h1)
}
let bmi = sumBMI(57,1.58)
console.log(`ค่าBMIเท่ากับ ${bmi}`)


let sumNumber00 = (n0: number, n00: number) => n0+n00
let resSum = sumNumber00(36,84)
console.log(`ผลบวกเท่ากับ ${resSum}`)


// class 
class Rectagle {
    w: number;
    h: number;

    calRec(){
        return this.w * this.h
    }
}
let rect: Rectagle = new Rectagle()
rect.h = 67
rect.w = 74
console.log(`พื้นที่ 4 เหลี่ยมเท่ากับ ${rect.calRec()}`)


