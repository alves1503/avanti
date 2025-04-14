//Seleção por ID

const content = document.getElementById("content");

console.log("content",content)

content.innerHTML = `<p>Paragrafo de texto</p>`
content.style.backgroundColor = "red"
content.style.fontSize = "50px"


//Seleção por classe


const classText = document.getElementsByClassName("text")
console.log("classText",classText)


for(text of classText) {
    text.style.color = "blue"
}