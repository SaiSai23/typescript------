const F1 = document.getElementById("from1")
const div1 = document.getElementById("ShowText") as HTMLInputElement
const inputText = document.getElementById("input1") as HTMLInputElement
const inputNumber = document.getElementById("input2") as HTMLInputElement

F1?.addEventListener("submit",(event)=> {
    event.preventDefault();
    console.log("คลิก")

    div1.innerHTML = `Hello Typescript ${inputText.value}, <br> I am ${inputNumber.value} year old`
})
