let word = "орангутанг"
let attempts = 5 //попытки
document.querySelector(".new").onclick = function(){
    let out = ""
    // цикл, начало, условие, шаг и внутри тело
    for(let i = 0; i < word.length; i = i + 1)[
        out = out + "*"
    ]
    document.querySelector(".word").value = out
    document.querySelector(".letter").value = ""
    document.querySelector(".letter").focus()
    letters = []
    document.querySelector(".letter").disabled = false
    document.querySelector(".check").disabled = false
    attempts = 5
    document.querySelector("span").innerHTML = attempts
}
let letters = []
document.querySelector(".check").onclick = function(){
    let letter = document.querySelector(".letter").value
    letters.push(letter)
    console.log(letters)
    let out = ""
    for(let i = 0; i < word.length; i++){
        let char = word[i]
        if(letters.indexOf(char) != -1){
            out = out + char
        }
        else{
            out = out + "*"
        }
    }
    if(word.indexOf(letter) == -1){
        attempts = attempts - 1
        document.querySelector("span").innerHTML = attempts
    }
    if(attempts == 0){
        document.querySelector(".letter").disabled = true
        document.querySelector(".check").disabled = true
        document.querySelector(".check").style.background = "red"
        document.querySelector(".check").style.color = "black"
        document.querySelector(".new").style.background = "green"
        document.querySelector(".new").style.color = "white"
    }
    document.querySelector(".word").value = out
    // удаляем старую букву
    document.querySelector(".letter").value = ""
    // заранее ставим наш курсор в инпут
    document.querySelector(".letter").focus()
    if(word == out){
        document.querySelector(".letter").disabled = true
        document.querySelector(".check").disabled = true
        alert("ТЫ ВЫИГРАЛ ЭТУ СЛОЖНУЮ ИГРУ! ТЕБЯ НЕ ПОВЕСИЛИ")
    }
}
