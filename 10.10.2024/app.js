const body = document.querySelector("body")

const div = document.createElement("div")

body.appendChild(div)

div.style.width = "500px"
div.style.height = "500px"
div.style.border = "1px solid black"

div.setAttribute("id","testowa")

const button1 = document.createElement("button")
const button2 = document.createElement("button")

body.appendChild(button1)
body.appendChild(button2)

button1.setAttribute("onclick","przycisk1()")
button2.setAttribute("onclick","przycisk2()")


function przycisk2(){
    div.style.backgroundColor = "green"
}
const input = document.createElement("input")
body.appendChild(input)

input.setAttribute("type","text")
input.setAttribute("id","wartosc")

function przycisk1(){
    const kolor = document.getElementById("wartosc").value
    div.style.backgroundColor = kolor
}

const input3 = document.createElement("input")
const button3 = document.createElement("button")

button3.setAttribute("onclick","przycisk3()")
input3.setAttribute("id","input3")
input3.setAttribute("type","text")

div.appendChild(input3)
div.appendChild(button3)






function przycisk3(){
    let tekst = document.getElementById("input3").value
    const par = document.createElement("p")
    par.innerHTML = input3.value
    div.appendChild(par)
    par.setAttribute("id","par")
    
    
}

const input4 = document.createElement("input")
const button4 = document.createElement("button")
button4.setAttribute("onclick","funkcja1()")
input4.setAttribute("type","text")
const buttondel = document.createElement("button")
buttondel.setAttribute("onclick","delete()")
body.appendChild(input4)
body.appendChild(button4)
body.appendChild(buttondel)
const list = document.createElement("ul")
body.appendChild(list)

function funkcja1(){
    const li = document.createElement("li")
    li.innerHTML = input4.value
    list.appendChild(li)
    const del = document.createElement("input")
    del.setAttribute("type","button")
    del.addEventListener("click",function(){
        list.removeChild(li)
    })
    li.appendChild(del)

}