var F1 = document.getElementById("from1");
var div1 = document.getElementById("ShowText");
var inputText = document.getElementById("input1");
var inputNumber = document.getElementById("input2");
F1 === null || F1 === void 0 ? void 0 : F1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("คลิก");
    div1.innerHTML = "Hello Typescript ".concat(inputText.value, ", <br> I am ").concat(inputNumber.value, " year old");
});
