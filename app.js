const form = document.querySelector('form')
const message = document.querySelector('.message')
const info_cont = document.querySelector('.info')
const middle_cont = document.querySelector('.middle')


// classes
class Output {
    constructor() {

    }
    createHTML() {
        const html = document.createElement('section')
        html.classList.add('output')
        html.innerHTML = `<div class="outcome">
                <div class="links">
                    <div class="real_link">
                        https://developers.cloudflare.com/workers/examples
                    </div>
                    <hr>
                    <div class="gen_link">
                        https://olive.ly/ASseg
                    </div>
                </div>
                <div class="copy">
                    <button class="copy_btn">
                        Copy
                    </button>
                </div>
            </div>`
        return html
    }

    insertHTML() {
        const html = this.createHTML()
        middle_cont.insertBefore(html, info_cont)
    }
}

// functions
function copyToClipboard(div) {
    const range = document.createRange()
    range.selectNode(div)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
}

async function postToAPI(input) {
    let formData = new FormData
    formData.append('link', input)

    await response = fetch('api/Sample', {
        body: formData,
        method: 'post'
    });

    await data = response.json()

    console.log(data)

}



// event listeners
form.addEventListener('submit', e => {
    e.preventDefault()
    if ((form.shortener.value).trim() === '') {
        form.shortener.classList.add('error')
        message.textContent = 'Please add a link'


    } else {
        form.shortener.classList.remove('error')
        message.textContent = ''
        const response = postToAPI()
        response.then(data => {
            console.log(data)
                // const shortener = new Output
                // shortener.insertHTML()
        }).catch(e => {
            console.log(e)
        })


    }
})

middle_cont.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.classList.contains('copy_btn')) {
        const copy_text = e.target.parentElement.previousElementSibling.lastElementChild
        copyToClipboard(copy_text)
    }
})