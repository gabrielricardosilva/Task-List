const criarTarefa = (evento) =>{
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')


    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')

    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.classList
}

//botao
const novaTarefa = document.querySelector('[data-form-button]')

//pegar o valor do input
const valor = input.value

//evento de clique
novaTarefa.addEventListener('click',(criarTarefa) =>{
  
})