// Dados iniciais (simulando um banco de dados)
let data = [];

// Função para adicionar um novo item
function addItem(name, email) {
    const newItem = { name, email };
    data.push(newItem);
}

// Função para exibir os itens na tabela
function displayItems() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>
                <button onclick="editItem('${item.email}')">Editar</button>
                <button onclick="deleteItem('${item.email}')">Excluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para editar um item
function editItem(email) {
    const index = data.findIndex(item => item.email === email);
    if (index !== -1) {
        const newName = prompt('Digite o novo nome:');
        if (newName) {
            data[index].name = newName;
            displayItems();
        }
    }
}

// Função para deletar um item
function deleteItem(email) {
    data = data.filter(item => item.email !== email);
    displayItems();
}

// Event listener para adicionar novo item
const form = document.getElementById('crud-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    addItem(name, email);
    displayItems();
    
    // Limpar os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});
