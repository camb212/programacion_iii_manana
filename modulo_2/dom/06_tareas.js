const boton = document.getElementById('agregar');
const input = document.getElementById('click');
const lista = document.getElementById('lista');

boton.addEventListener('click', () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    input.value = "";
  }
});
