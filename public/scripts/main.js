import Modal from './modal.js'

const modal=Modal()

const modalTiltle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existe com classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click",handleClick) 
})


/*Quando o botão delete for clicado ele abre a modal*/
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
  button.addEventListener("click",(event)=> handleClick(event, false))
})

function handleClick(event, check = true){
  event.preventDefault()
  const text = check ? "Marca como lida" : "Excluir"
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  const questionId= event.target.dataset.id

  const form = document.querySelector(".modal form")
  form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)
  
  modalTiltle.innerHTML= `${text} esta pergunta`
  modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML= `sim,${text.toLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
  
  //abrir modal
  modal.open()
}