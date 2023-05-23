const value = document.querySelector('#reset')
const bigBox = document.querySelector('#Box')
const button = document.querySelector('#setNumber')
let divStyles = {
    'background-color': 'rgb(109, 103, 86)',
    'color': 'grey',
    'border': '1px',
    'display': 'flex',
    'flex-wrap': 'wrap',
    'width': '25vh',
    'height': '25vh',
    'max-width': '25vh',
    'max-height': '25vh'
};
for (let x=1; x<=16; x++) {
    const div = document.createElement('div') 
    Object.assign(div.style, divStyles)
    bigBox.appendChild(div);
    div.setAttribute('id', x);
};
button.addEventListener("click", test)
function test() {
    console.log(value)
}