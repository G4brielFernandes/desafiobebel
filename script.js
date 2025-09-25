const nome = document.querySelector("#nome")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")
const email = document.querySelector("#email")

const lista = JSON.parse(localStorage.getItem('dados')) || []

formulario.addEventListener('submit', e => {
    e.preventDefault()

    obj = {
        nome: nome.value,
        email: email.value
    }
    
    lista.push(obj)
    localStorage.setItem('dados', JSON.stringify(lista))
    montar_card(obj)

    formulario.reset()
    nome.focus()
})

function montar_tela(){
    lista.forEach(e => {
        montar_card(e)
    })
}

function montar_card(obj) {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const del = document.createElement('button')
    const upd = document.createElement('button')
    const br = document.createElement('br')
    const p2 = document.createElement('p')

    p2.textContent = obj.email
    p.textContent = obj.nome
    del.textContent = 'deletar'
    upd.textContent = 'upadate'
    div.className = 'caixa'
    
    div.append(p,p2,br,del,upd)
    resultado.append(div)

    upd.addEventListener('click', () => {
        const novo_nome = prompt("Novo nome")
        const novo_email = prompt("Novo email")
        
        lista.forEach(e => {
            if (e.nome === obj.nome && e.email === obj.email){
                e.nome = novo_nome
                e.email = novo_email
            }

            p.textContent = novo_nome
            p2.textContent = novo_email
            localStorage.setItem('dados', JSON.stringify(lista))
            div.append(p,p2,br,del,upd)
            resultado.append(div)
        })
    })

    del.addEventListener('click',() => {
        resultado.removeChild(div)

        lista.forEach(e => {
            if (e.nome === obj.nome && e.email === obj.email){
                const pos = lista.indexOf(e)
                lista.splice(pos, 1)
                localStorage.setItem('dados', JSON.stringify(lista))
            }
        })

    })
}

montar_tela()