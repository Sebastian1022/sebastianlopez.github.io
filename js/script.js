/*Al igual que en el rizoma, el código debe mostrar que todos los caminos
están conectados entre sí, en la programación las clases son ejemplos de multiplicidad
y en los identificadores hay ruptura a-significante. Mientras uno muestra atributos se multiplican
otros evidencian una mirada heterogénea que se beneficia de ser parte de lo multiple y construyen el mapa del rizoma
*/
//principio de conexión y multiplicidad
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');
//principio de conexión y multiplicidad
let hideText_btn1 = document.getElementById('hideText_btn1');
let hideText1 = document.getElementById('hideText1');
//principio de conexión y multiplicidad
let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText2 = document.getElementById('hideText2');
//principio de conexión y multiplicidad
let hideText_btn3 = document.getElementById('hideText_btn3');
let hideText3 = document.getElementById('hideText3');
//Principio de ruptura a-significante
hideText_btn.addEventListener('click', toggleText);
hideText_btn1.addEventListener('click',toggleText);
hideText_btn2.addEventListener('click',toggleText);
hideText_btn3.addEventListener('click',toggleText);
//Principio de cartografía y calcomanía
function toggleText(){
    hideText.classList.toggle('show');
    hideText1.classList.toggle('show');
    hideText2.classList.toggle('show');
    hideText3.classList.toggle('show');
}

