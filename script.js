
//ejercicio 1 - playlist
// const lista = document.querySelector('ul');
// let items = "";
// for(let i=0; i<5; i++) {

//   const cancion=prompt('Ingrese una canción');
//   items+=`<li> ${cancion} </li>`;
// }
// lista.innerHTML=items;

//ejercício 2 - contador
// const buttons = document.getElementsByClassName(`counter`);
// const result = document.getElementById(`result`);

// const operation = (event)=>{
//     const button = event.target;
//     const qty = button.getAttribute('data-qty');
//     const op = button.getAttribute('data-op');

//     if(op=='plus'){
//         result.value = parseInt(result.value) + parseInt(qty);
//     }
//     else {
//         result.value = parseInt(result.value) - parseInt(qty);
//     }
// }
// for(let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener(`click`, operation);
// }


//ejercicio 3 - adivinanza

// const boton1 = document.getElementById('correcto');
// boton1.addEventListener('click', correcto)
// function correcto(){
//     boton1.style.background = 'green'
//     const respuesta = document.getElementById('resultado')
//     respuesta.innerText = `Correcto!`
// }
// const boton2 = document.getElementById('errado1');
// boton2.addEventListener('click', errado)
// const boton3 = document.getElementById('errado2');
// boton3.addEventListener('click', errado)
// function errado(){
//     boton1.style.background = 'green'
//     boton2.style.background = 'red'
//     boton3.style.background = 'red'
//     const respuesta = document.getElementById('resultado')
//     respuesta.innerText = `Errado!`
// }
