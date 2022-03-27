let item = document.querySelector('.itens')
let list = document.querySelector('.list')
let input = document.querySelector('.input')
const itens = document.querySelector('.itens-left')
const link = document.querySelectorAll('.link')
const bgimg = document.querySelector('.background-img')
const ul = document.querySelector('.ueli')
const width = screen.width;
let contador = 1
let cont = 0
let conttheme = 1
let e = 1
input.addEventListener('keypress', function (k) {
    if (k.keyCode == 13) {
        list.style.display = 'block'
        list.style.borderTop = 'none'
        list.style.marginTop = '30px'
        item.style.borderTop = '1px solid #393A4B '
        item.style.marginTop = '-20px'
        cont += 1
        itens.innerHTML = `${cont} items(s) left`
        const p = document.createElement('p')
        const lista = document.createElement('li')
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        const ueli = document.querySelector('.ueli')
        const div4 = document.createElement('div')
        ueli.appendChild(lista)
        lista.append(div1, div3, div4)
        div1.appendChild(div2)
        div3.appendChild(p)
        div4.classList.add('div4')
        lista.classList.add('test')
        div1.classList.add('bola-mae')
        div2.classList.add('bola')
        div3.classList.add('txt-mae')

        p.textContent = input.value
        input.value = ''
        div4.addEventListener('click', function () {
            ueli.removeChild(lista)
            cont -= 1
            itens.innerHTML = `${cont} items(s) left`
            if (cont == 0) {
                item.style.marginTop = '30px'
            }

        })
        div2.addEventListener('click', function () {
            if (contador % 2 !== 0) {
                div2.style.backgroundImage = "url('./images/icon-check.svg')"
                p.style.textDecoration = 'line-through'
                p.style.color = '#C8CBE7'
                ++contador
            } else {
                div2.style.backgroundImage = "none"
                p.style.textDecoration = 'none'
                p.style.color = '#9495a5'
                ++contador
            }
        })

    }
})

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        for (let i = 0; i < link.length; i++) {
            event.preventDefault()
        }
    })
}
if (width < 550) {
    input.setAttribute('maxLength', '40')
}
