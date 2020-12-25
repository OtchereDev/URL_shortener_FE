const form = document.querySelector('form')
const message = document.querySelector('.message')

form.addEventListener('submit', e => {
    e.preventDefault()
    if ((form.shortener.value).trim() === '') {
        form.shortener.classList.add('error')
        message.textContent = 'Please add a link'


    } else {
        form.shortener.classList.remove('error')
        message.textContent = ''
    }
})