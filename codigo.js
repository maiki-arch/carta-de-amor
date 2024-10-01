const urlSearchParams= new URLSearchParams(window.location.search)

const messageCustom= urlSearchParams.get('mesagge')

if (messageCustom) {
    const mainMessageElement= document.querySelector('#mainMessage')
    mainMessageElement.textContent= decodeURI(messageCustom)
}

const btnOpenElement= document.querySelector('#open')
const btnCloseElement= document.querySelector('#close')

btnCloseElement.disabled= true

btnOpenElement.addEventListener('click', ()=>{
    btnOpenElement.disabled = true
    btnCloseElement.disabled = false
    const coverElement = document.querySelector('.cover')
    coverElement.classList.add('open-cover')
    
    setTimeout(()=>{

        coverElement.style.zIndex= -1
        const paperElement= document.querySelector('.paper')
        paperElement.classList.remove('close-paper')
        paperElement.classList.add('open-paper')
    }, 500)
})

btnCloseElement.addEventListener('click', ()=>{
    btnCloseElement.disabled = false
    btnCloseElement.disabled = true
    btnOpenElement.disabled = false

    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    paperElement.classList.add('close-paper')
    paperElement.classList.remove('open-paper')

    setTimeout(()=>{
        coverElement.style.zIndex = 0
        coverElement.classList.remove('open-cover')

        const heartElement = document.querySelector('.heart')
        heartElement.style.display = 'none'
    }, 500)
})