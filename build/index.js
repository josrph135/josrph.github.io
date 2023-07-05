let menuBar = document.querySelector('#menuBar')
let dropdown = document.querySelector('#dropdown')
let closedown = document.querySelector('#closedown')

menuBar.addEventListener('click', function(){
    dropdown.classList.remove('hidden')
})
closedown.addEventListener('click', function(){
    dropdown.classList.add('hidden')
})