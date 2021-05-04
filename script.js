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

// ejercicio 4 - paleta

// const buttons = document.getElementsByClassName(`color`);
// const divColor = document.getElementById(`result`)
// const changeColor = (event)=>{
//     const button = event.target;
//     const color = button.getAttribute(`data-color`);
//     divColor.style.background=color;

// }

// for(i=0;i<buttons.length;i++){
//     buttons[i].addEventListener(`click`, changeColor)
// }

// ejercicio 5 - email sin leer
// const unread=document.getElementsByTagName('li')
// const  changeWeight= (event)=>{
//     const unread = event.target;
//     unread.classList.remove('bold');
// }
// for(let i=0; i<unread.length; i++){
//     unread[i].addEventListener('click', changeWeight)
// }