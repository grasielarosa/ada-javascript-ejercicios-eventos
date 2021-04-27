//ejercicio 1 - playlist
// const lista = document.querySelector('ul');
// let items = "";
// for(let i=0; i<5; i++) {

//   const cancion=prompt('Ingrese una canción');
//   items+=`<li> ${cancion} </li>`;
// }
// lista.innerHTML=items;


// ejercicio 2 - convertir km/millas
// let kilometros = document.getElementById('kilometros');
// let millas = document.getElementById('millas');
// const calculo = (event) => {
//     if (event.target.name === 'kilometros') {
//         millas.value = kilometros.value * 1.61;
//     } else if (event.target.name === 'millas') {
//         kilometros.value = millas.value * 0.62;
//     }
// }
// millas.addEventListener('change', calculo);
// kilometros.addEventListener('change', calculo); 

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
