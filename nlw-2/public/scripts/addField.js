//Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField);
// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    // limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input');
    // Colocar na página
    clearValues(fields);
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

const clearValues = (fields) =>  {
    fields.forEach(value => {
        value['values'] = "";
    });
}
    