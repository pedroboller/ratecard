const nota = document.querySelectorAll('.nota');
const btn = document.querySelector('.submit')
const rate = document.getElementById('rate')
const cont = document.querySelector('.conteiner')
const thank = document.querySelector('.thanks')

let rade_d = null;

nota.forEach((nota) =>{
    nota.addEventListener('click', (e) =>{
        const ativo = document.querySelector('.select')
        if (ativo) {
            ativo.classList.remove('select')
        }
        const card = e.target;
        card.classList.add('select')
        rade_d =e.target.innerText
    })
})

btn.addEventListener('click', ()=> {
    if (rade_d) {
        rate.innerText =rade_d
        cont.classList.add('hidden')
        thank.classList.remove('hidden')
    }
})