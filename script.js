const nome = document.querySelector("#nome")
const formulario = document.querySelector("#formulario")
const resultado = document.querySelector("#resultado")

const lista = JSON.parse(localStorage.getItem('dados')) || []

formulario.addEventListener('submit', e => {
    e.preventDefault()

    obj = {nome: nome.value}
    
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
    
    p.textContent = obj.nome
    del.textContent = 'deletar'
    upd.textContent = 'upadate'
    div.className = 'caixa'
    
    div.append(p,br,del,upd)
    resultado.append(div)

    upd.addEventListener('click', () => {
        const novo_nome = prompt("Novo nome")
        lista.forEach(e => {
            if (e.nome === obj.nome){
                e.nome = novo_nome
            }
            p.textContent = novo_nome
            localStorage.setItem('dados', JSON.stringify(lista))
            div.append(p,br,del,upd)
            resultado.append(div)
        })
    })

    del.addEventListener('click',() => {
        resultado.removeChild(div)

        lista.forEach(e => {
            if (e.nome === obj.nome){
                const pos = lista.indexOf(e)
                lista.splice(pos, 1)
                localStorage.setItem('dados', JSON.stringify(lista))
            }
        })

    })
}

montar_tela()