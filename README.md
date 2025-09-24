 📝 Desafio: Lista de Nomes com LocalStorage

Este projeto é uma aplicação web simples feita em JavaScript puro (Vanilla JS), que permite ao usuário adicionar, atualizar e deletar nomes. Os dados são armazenados no `localStorage`, garantindo persistência mesmo após o recarregamento da página.

## 💡 Funcionalidades

- ✅ Adicionar nomes
- 🔁 Atualizar nomes (edição via `prompt`)
- ❌ Deletar nomes
- 💾 Persistência dos dados usando `localStorage`
- 📄 Renderização automática dos dados ao carregar a página

---

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS (não incluído no exemplo, mas pode ser adicionado)
- JavaScript (ES6)
- API Web Storage (`localStorage`)

---

## 🚀 Como Funciona

### 1. Adição de Nomes

- O usuário digita um nome em um campo de input e clica em "Adicionar" (submit).
- O nome é salvo em um array (`lista`).
- O array é armazenado no `localStorage` em formato JSON.
- Um "card" é criado dinamicamente na tela com o nome, e dois botões: **"deletar"** e **"update"**.

### 2. Renderização Automática

- Ao carregar a página, a função `montar_tela()` percorre os dados salvos no `localStorage` e renderiza todos os nomes cadastrados.

### 3. Atualização

- Ao clicar no botão **"update"**, um `prompt` é exibido para digitar um novo nome.
- O nome é atualizado tanto na interface quanto no `localStorage`.

### 4. Remoção

- Ao clicar no botão **"deletar"**, o item é removido da tela e do `localStorage`.

---

## 📁 Estrutura Esperada do HTML

```html
<form id="formulario">
  <input type="text" id="nome" required />
  <button type="submit">Adicionar</button>
</form>

<div id="resultado"></div>
